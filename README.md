# gPass - Random Password Generator

![npm](https://img.shields.io/npm/v/@thpadelis/gpass?label=version&style=flat-square)
![npm](https://img.shields.io/npm/dt/@thpadelis/gpass?style=flat-square)
![NPM](https://img.shields.io/npm/l/@thpadelis/gpass?style=flat-square)

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

## Usage

```sh
gpass [options]
```

Options:

- `-V`, `--version` output the version number
- `-l`, `--length <number>` length of password (default: "10")
- `-n`, `--number <number>` generate number of passwords (default: "1")
- `-s`, `--save` save password to passwords.txt (default: false)
- `-el`, `--exclude-lower` exclude lower letters (default: false)
- `-eu`, `--exclude-upper` exclude upper letters (default: false)
- `-en`, `--exclude-numbers` exclude number (default: false)
- `-es`, `--exclude-symbols` exclude symbols (default: false)
- `-cp`, `--copy` copy to clipboard (default: false)
- `-p`, `--pin` create PIN (default: false)
- `-h`, `--help` display help for command

## Examples

Generate password with length of 20 characters

```sh
gpass -l 20
```

Generate password with no symbols

```sh
gpass -es
```

Generate password with no numbers

```sh
gpass -en
```

Generate password with only letters and length of 16

```sh
gpass -l 16 -es -en
```

Create PIN

```sh
gpass -p
```

## Advice

1. Use `gpass` to generate random passwords.
2. Avoid to use a short passwords, try to use only passwords with 16+ characters.
3. Do not share your passwords with any one.
4. Do not reuse a password.
