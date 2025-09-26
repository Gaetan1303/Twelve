```bash
docker build  --tag user_name/twelve-prod .
docker run -d -p 1212:80 user_name/twelve-prod
```


''' Pour lancer le projet 
RUN python3 -m http.server 8001