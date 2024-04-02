# Kubernetes Assignment for CSCI 5409 - Cloud Computing

## Introduction
I dove deep into the world of containerization, CI/CD pipelines, and Kubernetes, specifically focusing on deploying a cloud-native application on the Google Cloud Platform (GCP) using Google Kubernetes Engine (GKE). My journey through this project reinforced my understanding of Docker, CI/CD practices, and Kubernetes, allowing me to deploy a multi-container application that utilizes persistent storage and demonstrates complex inter-service communication.

## Learning Outcomes
- **Containerization with Docker**: I mastered the art of containerizing applications, ensuring they can run reliably across different computing environments.
- **CI/CD Pipelines**: I developed a code deployment pipeline using GCP tools, automating the deployment process to GKE from code commit to production.
- **Kubernetes Understanding**: Through hands-on experience, I learned to create and manage Kubernetes clusters using both GCP console and Infrastructure as Code with Terraform.
- **Persistent Storage**: I successfully attached persistent volumes to my GKE cluster, allowing the application to maintain state across deployments.
- **Kubernetes Tools**: Using tools like `kubectl`, I managed container interactions within pods and troubleshooted my GKE cluster efficiently.
- **Application Update Strategies**: I gained insights into managing application versions within GKE, ensuring smooth rollouts and rollbacks.

## Project Overview
I developed two microservices using NodeJS, focusing on creating a robust CI/CD pipeline for deploying these services to GKE. The services interact with each other, utilizing a shared persistent volume within GKE for data storage and retrieval.

### Container 1
- **Functionality**: Handles file storage on GKE's persistent volume and computes results based on stored data, interacting with Container 2.
- **Endpoints**:
  - `/store-file`: Stores provided data into a file on the persistent volume.
  - `/calculate`: Calculates the total of a specified product from the stored file, utilizing Container 2 for computation.

### Container 2
- **Functionality**: Listens on a separate endpoint, calculating the total of a specified product from a file stored on the persistent volume.
- **Communication**: Designed to work in tandem with Container 1, ensuring seamless data processing and result generation.

## Challenges and Solutions
- **Learning Curve**: The steep learning curve of GCP's CI/CD tools and Terraform was mitigated through dedicated self-learning and experimentation.
- **Persistent Storage Access**: Ensuring both containers had access to the persistent volume required careful configuration of Kubernetes deployment and persistent volume claims.
- **CI/CD Pipeline Optimization**: Developing a seamless CI/CD pipeline involved multiple iterations to ensure efficient deployment and rollback strategies.
