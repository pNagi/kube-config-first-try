# kube-config-first-try

## Preliquisites

### Install kubectl

+ https://kubernetes.io/docs/tasks/tools/install-kubectl/

+ If you have gcloud, you can install via gcloud
  ```sh
  gcloud components install kubectl
  ```

### Install minikube

+ https://kubernetes.io/docs/tasks/tools/install-minikube/

## Set up Environment

```sh
minikube start

# Create namespaces (in namespaces directory).
kubectl create -f namespaces/ --cluster=minikube --user=minikube

# You can see all namespace you have in minikube by
# `kubectl get namespaces --cluster=minikube`

# Create dev and prod context.
# With these contexts, we don't have to specify --cluster --user --namespace everytime we run a command.
kubectl config set-context dev --namespace=development --cluster=minikube --user=minikube
kubectl config set-context prod --namespace=production --cluster=minikube --user=minikube

# You can see all contexts you have by
# `kubectl config get-contexts`

# Also, you can switch by
# `kubectl config use-context <dev | prod>`

# Now we are going to use dev context, so run
kubectl config use-context dev

# Apply
```