
FROM openethereum/openethereum:latest
USER root

RUN mkdir /home/openethereum/test-network
WORKDIR /home/openethereum/test-network

ENV MINING_VALIDATOR_KEY_ADDRESS=${MINING_VALIDATOR_KEY_ADDRESS} 
ENV MINING_VALIDATOR_KEY_PASSWORD=${MINING_VALIDATOR_KEY_PASSWORD} 

COPY ./validator-X-ressource/docker-entrypoint-validator.sh .
COPY ./validator-X-ressource/validator.toml .
COPY poa-test-network.json .
COPY bootnodes.txt .

RUN mkdir -p ./chain-data/keys/poa-test-network/


ENTRYPOINT [ "/bin/sh", "./docker-entrypoint-validator.sh", "--no-warp" ]

