# Log Output Application

Application that generates a random string on startup, stores it in memory, and outputs it every five seconds with a timestamp

## Despliegue


### Desplegar en Kubernetes

```bash
kubectl create deployment log-output-dep --image=ravila86/log-output:v1
```
## Usando deploymente.yaml (ubicarse en al raiz del repositorio)
```bash
kubectl apply -f log_output/manifests/deployment.yaml
```
## Logs

Para comprobar que la aplicación está imprimiendo los registros correctamente, ejecuta:

```bash
kubectl logs -f deployment/log-output-dep
```
