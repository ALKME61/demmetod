# Этап 13. Сборка EXE

<div class="module-badges">
  <span class="module-badge">Финальная сдача</span>
  <span class="module-note">Исполняемый файл</span>
</div>

::: info Отметка по модулю
Собираем Windows EXE для передачи практических результатов.
::: 


## Что делаем

Собираем настольное приложение в один исполняемый файл для Windows.

## Команда сборки

```bat
cd C:\demoexam_python
.\.venv\Scripts\activate
pyinstaller --noconfirm --windowed --onefile --name MosaicMaterialsApp --icon resources\Мозаика.ico --add-data "resources;resources" --collect-all mysql.connector main.py
```

## Где искать результат

После сборки файл будет здесь:

```txt
C:\demoexam_python\dist\MosaicMaterialsApp.exe
```

## Частая ошибка WinError 5

Если при повторной сборке появляется ошибка доступа, закройте запущенный `.exe` и повторите команду.

## Проверка EXE

1. Запустите `dist\MosaicMaterialsApp.exe`.
2. Убедитесь, что MySQL запущен.
3. Проверьте, что приложение видит данные из базы.
4. Откройте добавление, редактирование и поставщиков.

## Критерий готовности этапа

EXE запускается, подключается к базе и выполняет основные действия.
