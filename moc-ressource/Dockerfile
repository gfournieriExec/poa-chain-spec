
FROM openethereum/openethereum:latest
USER root

RUN mkdir /home/openethereum/test-network
WORKDIR /home/openethereum/test-network

ENV MOC_KEY_ADDRESS=${MOC_KEY_ADDRESS} 
ENV MOC_KEY_PASSWORD=${MOC_KEY_PASSWORD} 

COPY ./moc-ressource/docker-entrypoint-moc.sh .
COPY ./moc-ressource/moc.toml .
COPY poa-test-network.json .
COPY bootnodes.txt .

RUN mkdir -p ./chain-data/keys/poa-test-network/


ENTRYPOINT [ "/bin/sh", "./docker-entrypoint-moc.sh" ]

