# Этап 3. MySQL и phpMyAdmin

<div class="module-badges">
  <span class="module-badge">Модуль 1</span>
  <span class="module-note">Среда БД</span>
</div>

::: info Отметка по модулю
Запускаем MySQL и phpMyAdmin для разработки и администрирования базы данных.
::: 


## Что делаем

Запускаем MySQL и phpMyAdmin через Docker Compose. Это даёт одинаковую среду для всех студентов.

## `docker-compose.yml`

Создайте файл `C:\demoexam_python\docker-compose.yml`:

```yaml
services:
  mysql:
    image: mysql:8.4
    container_name: mosaic_mysql
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: mosaic_demo
      MYSQL_USER: demo
      MYSQL_PASSWORD: demo
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql

  phpmyadmin:
    image: phpmyadmin:latest
    container_name: mosaic_phpmyadmin
    restart: unless-stopped
    environment:
      PMA_HOST: mysql
      PMA_PORT: 3306
      PMA_USER: root
      PMA_PASSWORD: root
    ports:
      - "8081:80"
    depends_on:
      - mysql

volumes:
  mysql_data:
```

## Запуск

```bat
cd C:\demoexam_python
docker compose up -d
docker compose ps
```

Откройте phpMyAdmin:

```txt
http://localhost:8081
```

Данные для входа:

```txt
Пользователь: root
Пароль: root
```

## Альтернатива без Docker

Можно использовать XAMPP, Open Server Panel или локальный MySQL Server. В этом случае параметры подключения в `db.py` нужно будет заменить под свою установку.

## Критерий готовности этапа

phpMyAdmin открывается в браузере, а база `mosaic_demo` доступна.
