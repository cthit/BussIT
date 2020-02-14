FROM python
COPY . /usr/local/bussIT
WORKDIR /usr/local/bussIT

RUN pip install -e .

CMD ["python","BussIT-API/main.py"]
