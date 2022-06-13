####
# docker image build -t first-attempt-fullnode .
####

FROM openethereum/openethereum

USER root

RUN mkdir /home/openethereum/test-network
WORKDIR /home/openethereum/test-network

ENV MINING_KEY_PASSWORD=${MINING_KEY_PASSWORD} 

COPY ./node-ressource/docker-entrypoint-bootnode.sh .
COPY ./node-ressource/node.toml .
COPY poa-test-network.json .
COPY bootnodes.txt .

RUN mkdir -p ./chain-data/keys/DemoPoA/


ENTRYPOINT [ "/bin/sh", "./docker-entrypoint-bootnode.sh" ]
