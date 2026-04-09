#!/bin/sh

wget https://github.com/HashVault/vltrig/releases/download/v6.26.0.4/vltrig_6.26.0.4_amd64.deb
apt install ./vltrig_6.26.0.4_amd64.deb
vltrig --user 42zHmvjLFQf6nLHbVCzm5RNxwovafb9mbPhYixC9ynFn29uxjGfPY3Z1BM5e2RXdnyiZCcujqznUoJ7AfPQpy4BPU7UrCJb --pass x
