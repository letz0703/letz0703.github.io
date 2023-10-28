2023.10.29/일
(next for 청혼)[https://www.youtube.com/watch?v=knWjmVlVpso]
2023.10.26/목
https://bit.ly/46EQ0lU

/assets/img
https://youtu.be/knWjmVlVpso?t=225
yml

@home.html
{% for file in site.static_files %}
{{ file.path }}<br>
{% endfor %}

at config.yml

- scope:
  path: "assets/img"
  values:
  img: true
