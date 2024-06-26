provider "google" {
  project = "csci5409-k8s-1"
  region  = "us-central1"
}

resource "google_container_cluster" "k8_cluster" {
  name               = "csci5409-k8s-cluster"
  location           = "us-central1-c"
  initial_node_count = 1

  deletion_protection = false

  node_config {
    oauth_scopes = [
      "https://www.googleapis.com/auth/logging.write",
      "https://www.googleapis.com/auth/monitoring",
    ]

    disk_size_gb = 20
    disk_type    = "pd-standard"
    machine_type = "e2-medium"
    image_type   = "COS_CONTAINERD"
    preemptible  = false

    metadata = {
      disable-legacy-endpoints = "true"
    }
  }
}
