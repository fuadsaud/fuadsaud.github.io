---
layout: post
title: Ruby's protected Use Case
published: true
---

Disclaimer: this may be pretty obvious to you if you are a seasoned programmer.
I found it interesting because it was something I've never thought of.

This weekend, while hacking on [bis](//github.com/fuadsaud/bis) I discovered
an useful use case for Ruby's protected visibility modifier.

So, bis is a bitset - or bit array - implementation, a simple collection of
bits. One of my goals while building it was to make it an immutable collection.
The problem with immutable collections is that, sometimes, to realize a simple
set of operations on it, using it's public interface, will lead to a pretty
insatisfactory performance. Take the following example in account:

{% highlight ruby %}
bis = Bis.new(8, 7) #=> <<00000111>> 7

bis.set(5) #=> <<00100111>> 39
{% endhighlight %}

Simple. Just need to flips some bits and instantiate a new bis object with that
new value, right? Yeah, but the problem with that approach is: since I'm not
using a single integer as the storage for the bits, internally, the Bis
instantiation process is not exactly cheap: I would possibly have to unpack the
bits into multiple integers, depending on the size defined for each "word" on
the Bis class - it's not that expensive, but in this context it is certainly not
acceptable.

The solution I found? Let the former Bis object manipulate the internals of the
latter. Creating a protected writer for the internal `@store` attribute, I
could easily duplicate the current object and change only the bits I needed
directly in the new object's storage. This is the piece of code that actually
sets the store:

{% highlight ruby %}
def change_bit_at(index)
  ->(bit) {
    return self if self[index] == bit

    x, y = offset_for(index)

    new_with_same_size.().tap { |bis|
      bis.store = @store.dup.tap { |s|
        s[x] = s[x].send(change_operation_for(bit), 1 << y)
      }
    }
  }
end
{% endhighlight %}

Nevermind the weird overly functional-ish idioms - when I'm coding on my own I
do some crazy stuff for fun. The important part here is that I'm instantiating
a new Bis object - `new_with_same_size...` then directly shoving the
modified version of the current store into it.

I don't know if there's a better way of doing it, but using protected to
solve this problem seemed somewhat elegant - and surprising, since the only
use case for protected I had considered until then involved comparison methods.

Anyway, if you think this is amazing or it sucks so badly, like, the worst code
you've ever seem, please share your opinion on the comments. If you think
fiddling woth bits is something cool, take a look at
[Bis](//github.com/fuadsaud/bis) and make a contribution maybe.
