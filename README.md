# Food Recipe App

Full-stack application with React frontend, Spring Boot backend, and MySQL database.

## Features
- User signup/login
- Recipe management
- Docker deployment
- Kubernetes deployment
- Ansible automation

## Local Deployment

### Docker
```bash
docker-compose up -d --build
```
Access: http://localhost:3000

### Kubernetes
```bash
minikube start
minikube image load lat_project-backend:latest
minikube image load lat_project-frontend:latest
kubectl apply -f k8s/
minikube service frontend-service --url
```

### Ansible
```bash
ansible-playbook -i ansible/inventory.ini ansible/playbook.yml
```

## GitHub Actions
Workflow for CI/CD (add if needed).