FROM python:3

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY requirements.txt /usr/src/app/
RUN pip install -r requirements.txt

EXPOSE 8000

COPY backend /usr/src/app/backend
COPY blog /usr/src/app/blog
COPY data.cnf /usr/src/app/
COPY manage.py /usr/src/app/

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
