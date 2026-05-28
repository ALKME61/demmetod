# Этап 7. Python-окружение

<div class="module-badges">
  <span class="module-badge">Модуль 2</span>
  <span class="module-note">Старт приложения</span>
</div>

::: info Отметка по модулю
Создаём Python-окружение и зависимости для программного модуля.
::: 


## Что делаем

Создаём виртуальное окружение и устанавливаем зависимости приложения.

## Команды

```bat
cd C:\demoexam_python
python -m venv .venv
.\.venv\Scripts\activate
pip install PyQt6 mysql-connector-python pyinstaller
pip freeze > requirements.txt
```

## Что должно появиться

В проекте появятся:

```txt
.venv\
requirements.txt
```

## Проверка

```bat
python --version
pip list
```

В списке пакетов должны быть:

- `PyQt6`;
- `mysql-connector-python`;
- `pyinstaller`.

## Критерий готовности этапа

Виртуальное окружение активируется, зависимости установлены, `requirements.txt` создан.
