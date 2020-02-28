FROM python
COPY . /usr/local/bussIT
WORKDIR /usr/local/bussIT

RUN pip install -e .
RUN pip install waitress

WORKDIR ./BussIT-API/

CMD ["waitress-serve", "--call", "main:create_app"]