docker build -t deejaygeroso/deejaygeroso:latest -t deejaygeroso/deejaygeroso:$SHA -f ./config/docker/Dockerfile.prod .

docker push deejaygeroso/deejaygeroso:latest

docker push deejaygeroso/deejaygeroso:$SHA
kubectl apply -f config/k8s

kubectl set image deployments/app-deployment client=deejaygeroso/deejaygeroso:$SHA
