<?php

namespace Drupal\test_module_drupal\Plugin\QueueWorker;

use Drupal\node\Entity\Node;
use Drupal\Core\Queue\QueueWorkerBase;

/**
 * A worker to unpublish passed events.
 *
 * @QueueWorker(
 *   id = "queue_unpublish_events",
 *   title = @Translation("Worker to unpublish passed events."),
 *   cron = {"time" = 1}
 * )
 *
 */
class UnpublishPassedEvents extends QueueWorkerBase {

  /**
   * {@inheritdoc}
   */
  public function processItem($nodes) {
    foreach (Node::loadMultiple($nodes) as $node) {
      $node->setUnpublished();
      $node->save();
    }
  }

}
