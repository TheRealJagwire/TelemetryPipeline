kubectl delete --all deployments
kubectl delete --all services
./build_docker_image.sh
minikube image load telemetry-image:latest

kubectl apply -f k8s