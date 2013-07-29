---
layout: post
title:  "Hello, World!"
date:   2013-07-28 17:22:21
categories: code
---

This is a snippet from the Tempo Free Lax project. It is a class method that allows a client to recalculate the annual stats for every team in the database for that year.

{% highlight ruby linenos%}
def self.sum_all(year)
  start = Date.new(year,1,1)
  finish = Date.new(year,12,31)

  @@teams_2013.each do |team_id|
    if team_id != 65
      stat = AnnualStat.where(:team_id => team_id, :year => start).first
      stat = AnnualStat.new(:team_id => team_id, :year => start) if !stat.is_a?( AnnualStat )
      stat.sum
    end
  end
  end
{% endhighlight %}

Check out [Tempo Free Lax][tfl] to see it in action.

[tfl]:    http://tempofreelax.com
