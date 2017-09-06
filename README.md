# kube-config-first-try

## Installation
- gcloud-sdk
  - [OSX](https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-sdk-169.0.0-darwin-x86_64.tar.gz)
  - [Win](https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe)
  - [Linux](https://cloud.google.com/sdk/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/#download-as-part-of-the-google-cloud-sdk) `gcloud components install kubectl`
- A Hypervisor for Minikube ([virtualbox](https://www.virtualbox.org/))
- [Minikube](https://github.com/kubernetes/minikube/releases)

## Commands
- `minikube start`
- `minikube stop`
- `minikube dashboard`
- `kubectl apply -f file.yml`
- `kubectl apply -f file.json`

