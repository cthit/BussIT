FROM python
COPY . .

RUN pip install -e .
RUN pip install waitress

WORKDIR ./BussIT-API/

CMD ["waitress-serve", "--call", "main:create_app"]