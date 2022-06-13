#!/bin/sh

#Setup the validator's key file.


# # Setup the key's password file.
# echo "Mining key password: ${MINING_KEY_PASSWORD}"
# if [[ -z "${MINING_KEY_PASSWORD}" ]]; then
#    echo "Mining key password must not be empty!"
#    exit 1
# fi
# echo "${MINING_KEY_PASSWORD}" > node.pwd

# Launch openethereum.
/home/openethereum/openethereum --config=node.toml --jsonrpc-interface=all 
