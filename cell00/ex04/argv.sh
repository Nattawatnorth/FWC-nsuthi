#!/bin/sh
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    i=0
    for arg in "$@"; do
        if [ $i -eq 3 ]; then
            break
        fi
        echo "$arg"
        i=$((i + 1))
    done
fi
