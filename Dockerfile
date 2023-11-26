FROM nginx

COPY ./dist /usr/share/nginx/html

COPY default.conf.template /etc/nginx/templates/

EXPOSE 90

CMD ["nginx", "-g", "daemon off;"]
