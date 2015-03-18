---
layout: post
title: FUNctional programming
published: true
---

So I'm reading
["Functional Programming Patterns" by Michael Bevilacqua-Linn](http://pragprog.com/book/mbfpp/functional-programming-patterns-in-scala-and-clojure)
and one of the examples given to illustrate the usage of closures caught my
eye. Here it is:

{% highlight clojure %}
(defn make-composed-comparison [& comparisons]
  (fn [p1 p2]
    (let [results (for [comparison comparisons] (comparison p1 p2))
          first-non-zero-result
          (some (fn [result] (if (not (= 0 result)) result nil)) results)]
      (if (nil? first-non-zero-result)
        0
        first-non-zero-result))))
{% endhighlight %}

It's a function that takes a list of comparator functions and returns their
composition, which in turn, returns the first nonzero comparation result, or
zero if the comapared structures are equal in all criteria.
[The full listing](http://media.pragprog.com/titles/mbfpp/code/ClojureExamples/src/mbfpp/rso/closure_comparison.clj)
contains examples of usage.

What caught my eye was that I felt that I could tidy up this function to make
it even simpler. First, I didn't like that `for`. I always see a `for` with a
feeling of doubt that it could be replaced by `map` or something else. In this
case, instead of having a list of elements and a function that I want to apply
to all of them (commom use case for `map`), I have a list of functions that I
want to apply to a fixed set of arguments. Meet `juxt`, a neat little function
that does exactly what's needed:

{% highlight clojure %}
(defn make-composed-comparison [& comparisons]
  (fn [p1 p2]
    (let [results ((apply juxt comparisons) p1 p2)
          first-non-zero-result
          (some (fn [result] (if (not (= 0 result)) result nil)) results)]
      (if (nil? first-non-zero-result)
        0
        first-non-zero-result))))
{% endhighlight %}

There it is. I already feel better. But wait, we can dry it up even more!
We don't need to grab the first nonzero result then check if it's `nil` or not;
we can that very `some` function to just give us back the first result that
matches a given predicate, or `nil` otherwise.

{% highlight clojure %}
(defn make-composed-comparison [& comparisons]
  (fn [p1 p2]
    (let [comparison-results ((apply juxt comparisons) p1 p2)]
      (or
        (some #(when (nonzero? %) %) comparison-results)
        0))))
{% endhighlight %}

And ther you have it. This may feel stupid, but I can't describe how much fun
I have trying to figure out this kind of stuff.
