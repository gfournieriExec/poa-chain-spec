#!/bin/sh


#Setup the validator's key file.
echo "MOC key address: ${MOC_KEY_ADDRESS}"
if [[ -z "${MOC_KEY_ADDRESS}" ]]; then
   echo "MOC key address must not be empty!"
   exit 1
fi

sed -i "s/@MOC_KEY_ADDRESS@/${MOC_KEY_ADDRESS}/g" moc.toml

# # Setup the key's password file.
echo "MOC key password: ${MOC_KEY_PASSWORD}"
if [[ -z "${MOC_KEY_PASSWORD}" ]]; then
   echo "MOC key password must not be empty!"
   exit 1
fi
echo "${MOC_KEY_PASSWORD}" > moc.pwd

# Launch openethereum.
/home/openethereum/openethereum --config=moc.toml --jsonrpc-interface=all

