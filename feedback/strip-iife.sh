#!/bin/sh

# strips the IIFE from esbuild output
FILE=${1}

# see https://unix.stackexchange.com/questions/209068/how-do-i-delete-the-first-n-lines-and-last-line-of-a-file-using-shell-commands
sed -i '1d;$d' "$FILE"
