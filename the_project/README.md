# Todo Application

Application that generates a random string on startup, stores it in memory, and outputs it every five seconds with a timestamp

## Despliegue


### Desplegar en Kubernetes

```bash
kubectl create deployment todo-app-dep --image=ravila86/todo-app:v2
```
## Usando deploymente.yaml (ubicarse en al raiz del repositorio)
```bash
kubectl apply -f the_project/manifests/deployment.yaml
```

## Logs

Para comprobar que la aplicación está imprimiendo los registros correctamente, ejecuta:

```bash
kubectl logs -f deployment/todo-app-dep
```
