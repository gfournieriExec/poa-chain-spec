#!/bin/sh


#Setup the validator's key file.
echo "VALIDATOR key address: ${MINING_VALIDATOR_KEY_ADDRESS}"
if [[ -z "${MINING_VALIDATOR_KEY_ADDRESS}" ]]; then
   echo "VALIDATOR key address must not be empty!"
   exit 1
fi

sed -i "s/@MINING_VALIDATOR_KEY_ADDRESS@/${MINING_VALIDATOR_KEY_ADDRESS}/g" validator.toml

# # Setup the key's password file.
echo "VALIDATOR key password: ${MINING_VALIDATOR_KEY_PASSWORD}"
if [[ -z "${MINING_VALIDATOR_KEY_PASSWORD}" ]]; then
   echo "VALIDATOR key password must not be empty!"
   exit 1
fi
echo "${MINING_VALIDATOR_KEY_PASSWORD}" > validator.pwd

# Launch openethereum.
/home/openethereum/openethereum --config=validator.toml --jsonrpc-interface=all

