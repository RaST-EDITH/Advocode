FROM python:3.10.12-slim as baseimg

COPY requirements.txt .

RUN apt-get update && apt-get -y install uuid-runtime coreutils && \
    pip install -r requirements.txt && \
    rm -f requirements.txt && \
    mkdir app

FROM baseimg

COPY . /app/

WORKDIR /app

RUN chmod +x entrypoint.sh

EXPOSE 8000

VOLUME [ "/app/models" , "/app/envs"]

ENTRYPOINT ["./entrypoint.sh"]