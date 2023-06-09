# Install requirements
sudo apt update
sudo apt install wget gpg apt-transport-https

# Setup repository
wget -qO- https://chative.com/d/linux/repos/apt/chative/package.asc | gpg --dearmor > ~/chative-pubkey.gpg
sudo install -D -o root -g root -m 644 ~/chative-pubkey.gpg /etc/apt/keyrings/chative-pubkey.gpg
sudo echo "deb [signed-by=/etc/apt/keyrings/chative-pubkey.gpg arch=$( dpkg --print-architecture )] https://chative.com/d/linux/repos/apt/chative stable main" | sudo tee /etc/apt/sources.list.d/chative.list
rm ~/chative-pubkey.gpg


# Install chative
sudo apt update
sudo apt install chative