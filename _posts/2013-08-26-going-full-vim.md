---
layout: post
title: Going full Vim
tldr: Always go full Vim
published: true
---

It's been more than a year since I dove my head into Unix - yup, I have no
neckbeard at all. I got my way around the tools and philosophy pretty quickly,
mainly motivated by years of frustation using Windows. As time passed, more and
more I'd use the terminal for getting things done; I easily learned the power
it has to offer. Despite that, one of the most important parts of my workflow
was still tied to a very non-unixy tool: text editing.

When I used Windows, I was pretty addicted to [Intype](//inotai.com/intype), a
TextMate like editor. It was in pretty early stages of development, but rather
stable and the experience it provided was way better than alternatives like
Notepad++ and friends. The Intype mailing list was the first contact I had with
the development process of a sofware, and I was so excited about that I quickly
became the most active user in the community :).

When I migrated to Ubuntu I had to choose another tool to aid my text editing
needs. After fiddling with Gedit a little, and frustrating myself trying to quit
Vim, I stumbled on Sublime Text 2, which was pretty famous at the time for
being good looking and a reliable cross-platform solution. And dammit, what a
nice piece of software! It easilly outrunned any of the editors I've used until
that moment, as it was extensible, customizable, featured a lot of useful
plugins and followed the same editing principles of TextMate, with which I was
already used to.

As time passed and I got better at doing things using the terminal, Vim started
to make some sense to me. I used it for quick file editing when I was browsing
the filesystem and it worked pretty well. But I was totally unable to use it
for more than a couple of minutes. That because I had to think. Using Vim every
now and then is not hard, but having to rely on it for more complex tasks
without understanding what's going on under the hood is not a good experience.

As a beginner, I felt intimidated. I knew it was powerful - as I had some
coworkers and friends who really preformed magic things using it - and so I
kind of respected it. But I felt like that was not for me. At least not at that
time.

There were times when the Vim hype would just take me and I would try to
switch. All of sudden I would decide: "From now on, I'll just use Vim". Silly
me. Less than an hour later, after dropping my productivity by 300% and get
tired of fighting it's autoindent settings I would just give up and go back to
Sublime. I felt good again because I knww what I was doing, but I felt like a
looser. I knew that if I spent the time to customize Vim and learn its
principles, it would do most things I needed, but, lazy as I am, I would always
procrastinate.

This situation frustrated me; the fact that I wanted to use a tool, but my
laziness/lack of patience would keep me away from it. I knew that one day I
would be able to understand Vim and use it heavily - the same way I know one
day I'll get passed through the Objective-C "Hello World" or the way I'm
certain I'll understand Rust's pointers... - but I wasn't there yet.

Until last month.

Recently I've been cudling more than usual with Vim. Some things about Sublime
were just driving me mad:

  * <p>
      <strong>poor plugin ecosystem:</strong> most part just don't work or have some weird
      behaviour, leading the editor to crash :\; others suffer from the
      Textmate compatibility syndrome: they're just bad ports of an old TM plugin
      that wildly override half of Sublime's default keymappings;
    </p>

  * <p>
      <strong>memory footprint:</strong> 400mb is harsh for someone working with a 4gb on Mountain
      Lion;
    </p>

  * <p>
      <strong>rails integration sucks:</strong> there's no such thing as
      rails.vim for Sublime. Not even close.
    </p>

  * <p>
      <strong>the development process:</strong> is as much as closed as
      possible. Some odd bugs are never solved, the default packages are out of
      date, there's poor documentation about the API...
    </p>

So I felt the time for the change was coming closer.

One day, I don't remember where, I read about Vim's text objects and how you
communicate with the editor through this set of mnemonics. Really, when I
realized how powerful composing commands with ranges and counts was, I didn't
thought twice: fired up Vim and started playing with it in my code. And from
that day on, I became another person.

I became addicted to it. I felt excited everytime I found some neat unknown
feature that made my editing process more powerful. If you're a Ruby
programmer, you've already know that one of the main goals of the language is
to make the programmers happy. I'd say one of the main features of Vim is to
make it's users happy. Everything is just so concise, everything makes sense.
I don't need to remember weird command-control-option-shift combinations that
have nothing to do with the goal of the command itself. Things are just made
for your brain's pleasure.

The switch process couldn't have been smoother. I tried making Vim's workflow
resemble the one I was used to with Sublime - getting snippets to work played
major role here. So I thought I could share some pretty basic tips with people
stuck in the same situation I was:

## Get to know how to move around

I highly recommend you to learn the basic movements language of Vim. Using
Sublime Vintage helped me a lot in the migration process, so give it a try if
you want to migrate. Using Vim effectivelly is mainly about the things you can
do with the commands in normal mode, so if you don't get them, you're not
gonna get a taste of the power it provides you.

## Get yourself some packages, hell yeah

Vim is pretty powerfull out of the box, but you won't get far without some
plugins. Vim Sensible, Fugitive, Commentary, Repeat an Surround are all useful
and rather simple to get started. You should also get some support for you
prefered languages - for rubyists, [vim-ruby](//github.com/vim-ruby/vim-ruby)
is a must have.

## Know your vimrc

You should definetly get some plugins to start. But just go throwing anything
you find cool into your vimrc. Only add things after you're sure you understand
what they're doing and you really need them.  Don't use a plugin just because
it's popular; Vim's defaults and core features are pretty powerful already, you
may not need much more.

Btw, please do yourself a favour and keep away from Janus. I tried it twice and
I can tell you: it's just not worth it. It's gonna give you a lot of crap you
don't need and it'll make you scream of anger with that startup time.

My vimrc is pretty basic. I like getting as close as possible to the default
mappings, making my muscle memory more portable. If you wanna get an idea, you
can check it
[here](//github.com/fuadsaud/J.A.R.V.I.S/blob/master/vim).
Got curious about something? Just go `:help interesting-setting` and you'll
probably find some useful and straightforward info on the subject.

## Get Vundle

Or any other package manager. It's just the only reasonable way to maintain
your dependencies.

## Vimcasts.org

Seriously, this is an essential resource. As of now there are 50 episodes: you
can watch them in sitting if you get as excited as I was. And you'll get to
listen to - Drew Neil's - sexiest voice in the screencasters community -
besides [Ben Orenstein](//twitter.com/r00k)'s, of course :)

## So...

Anyway, I feel good now after doing the switch. I just completed one of the
goals I had in my life, as a developer. I'm so happy to say I'm a Vim user I
already bought a sticker:

![Vim love](http://i.imgur.com/mzypjfN.png)

There are yet a few issues I'm not very pleased with, such as HTML/ERB
indentation and poor snippets scopes settings (the whole snippets set is poor,
in fact), clipboard management (still couldn't copy something to OS X's
clipboard :\) and some other minor things (if you know how to that please tell
me). But in general I'm pretty satisfied, and happy to be able to combine my
editing whith my <del>screen</del> tmux workflow.

But hey, don't get me wrong: Sublime is a pretty cool editor - maybe the best
one out there in it's category - and I'm pretty sure to say there's nothing in
Vimworld that gets closer to Sublime's multi-cursor mode - that thing is just
PERFECT. I tried using TextMate 2 for a while just to confirm that what
everyone talks about it is true: it sucks. The only nicety about TM is that
DAMN IT'S PRETTY GOOD LOOKING. Even Sublime doesn't look so Mac-ish. But hey, I
could even make Vim look somewhat pretty using MacVim, Airline, Inconsolata and
some transparency settings - Neverthless, I'm still waiting for the day someone
is going to reimplement Vim in pure Cocoa. Maybe I'll do it when I learn
Objective-C :p.

No.
