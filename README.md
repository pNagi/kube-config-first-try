# kube-config-first-try

## Preliquisites

### Install google cloud SDK

https://cloud.google.com/sdk/downloads

### Install kubectl
```sh
gcloud components install kubectl
```

### Install minikube

https://github.com/kubernetes/minikube/

## Set up

Create context with development and production environment
```sh
kubectl config set-context dev --namespace=development --cluster=minikube --user=minikube
kubectl config set-context prod --namespace=production --cluster=minikube --user=minikube
```

You can see all contexts you have by
```sh
kubectl config get-contexts
```

Now you can switch by
```sh
kubectl config use-context <dev | prod>
```