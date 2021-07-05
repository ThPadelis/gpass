# gPass - Random Password Generator

## Table of Contents

- [What is gPass?](#what-is-gpass)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Advice](#advice)

## What is gPass?

gPass stands for Password Generator, it's a utility command line tool that allows you to generate random password.

## Installation

Install the CLI globally. If you are windows user, run the command as administrator. If you are macOS user, add `sudo` before the following command. If you are linux user, you already know what you are doing.

```sh
npm install --global @thpadelis/gpass
```

You can also use it using `npx`.

```sh
npx gpass
```

## Usage

```sh
gpass [options]
```

Options:
- `-V`, `--version` output the version number
- `-l`, `--length <number>` length of password (default: "10")
- `-s`, `--save` save password to passwords.txt in your current location (default: false)
- `-nn`, `--no-numbers` remove numbers
- `-ns`, `--no-symbols` remove symbols
- `-cp` `--copy` copy to clipboard (default: false)
- `-h`, `--help` display help for command

## Examples

Generate password with length of 20 characters
```sh
gpass -l 20
```

Generate password with no symbol
```sh
gpass --no-symbols
```

Generate password with no numbers
```sh
gpass --no-numbers
```

Generate password with only letters and length of 16
```sh
gpass -ns -nn -l 16
```
## Advice

1. Use `gpass` to generate random passwords.
2. Avoid to use a short passwords, try to use only passwords with 16+ characters.
3. Do not share your passwords with any one.
4. Do not reuse a password.
