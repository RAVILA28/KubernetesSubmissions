# Todo Application

Application that generates a random string on startup, stores it in memory, and outputs it every five seconds with a timestamp

## Despliegue


### Desplegar en Kubernetes

```bash
kubectl create deployment todo-app-dep --image=ravila86/todo-app:v2
```

## Logs

Para comprobar que la aplicación está imprimiendo los registros correctamente, ejecuta:

```bash
kubectl logs -f deployment/todo-app-dep
```
