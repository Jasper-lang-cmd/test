```python
#1. 读取users.dat、rating.dat、movies.dat三个文件，
#   并将他们存储在不同的DataFrame中，分别命名为users、ratings、movies。

import pandas as pd

# 设置文件路径
users_file_path = r'C:\Users\29962\Desktop\ml-1m\users.dat'
ratings_file_path = r'C:\Users\29962\Desktop\ml-1m\ratings.dat'
movies_file_path = r'C:\Users\29962\Desktop\ml-1m\movies.dat'

# 读取users.dat文件并存储到DataFrame中
users = pd.read_csv(users_file_path, sep='::', header=None, names=['userId', 'gender', 'age', 'occupation','Zip-code'], engine='python')

# 读取ratings.dat文件并存储到DataFrame中
# 注意：ratings.dat通常不包含name, age, gender列
ratings = pd.read_csv(ratings_file_path, sep='::', header=None, names=['userId', 'movieId', 'rating', 'timestamp'], engine='python')

# 读取movies.dat文件并存储到DataFrame中
# 注意：movies.dat不包含userId, name, age, gender列
movies = pd.read_csv(movies_file_path, sep='::', header=None, names=['movieId', 'title', 'genres'], engine='python')
```

```python
# 2.分别输出三个DataFrame的前五行，并输出ratings的全部数据。


print("users DataFrame:")
display(users.head())  # 打印前5行以查看数据


print("\nmovies DataFrame:")
display(movies.head())

print("\nratings DataFrame:")
display(ratings.head())
print("\nratings DataFrame全部数据:")
display(ratings)  # 输出全部数据，如果数据量很大，这可能会很长
```

    users DataFrame:

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>userId</th>
      <th>gender</th>
      <th>age</th>
      <th>occupation</th>
      <th>Zip-code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>F</td>
      <td>1</td>
      <td>10</td>
      <td>48067</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>M</td>
      <td>56</td>
      <td>16</td>
      <td>70072</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>M</td>
      <td>25</td>
      <td>15</td>
      <td>55117</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
      <td>M</td>
      <td>45</td>
      <td>7</td>
      <td>02460</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>M</td>
      <td>25</td>
      <td>20</td>
      <td>55455</td>
    </tr>
  </tbody>
</table>
</div>

    movies DataFrame:

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>movieId</th>
      <th>title</th>
      <th>genres</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>Toy Story (1995)</td>
      <td>Animation|Children's|Comedy</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>Jumanji (1995)</td>
      <td>Adventure|Children's|Fantasy</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>Grumpier Old Men (1995)</td>
      <td>Comedy|Romance</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
      <td>Waiting to Exhale (1995)</td>
      <td>Comedy|Drama</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>Father of the Bride Part II (1995)</td>
      <td>Comedy</td>
    </tr>
  </tbody>
</table>
</div>

    ratings DataFrame:

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>userId</th>
      <th>movieId</th>
      <th>rating</th>
      <th>timestamp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>1193</td>
      <td>5</td>
      <td>978300760</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1</td>
      <td>661</td>
      <td>3</td>
      <td>978302109</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1</td>
      <td>914</td>
      <td>3</td>
      <td>978301968</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1</td>
      <td>3408</td>
      <td>4</td>
      <td>978300275</td>
    </tr>
    <tr>
      <th>4</th>
      <td>1</td>
      <td>2355</td>
      <td>5</td>
      <td>978824291</td>
    </tr>
  </tbody>
</table>
</div>

    ratings DataFrame全部数据:

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>userId</th>
      <th>movieId</th>
      <th>rating</th>
      <th>timestamp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>1193</td>
      <td>5</td>
      <td>978300760</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1</td>
      <td>661</td>
      <td>3</td>
      <td>978302109</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1</td>
      <td>914</td>
      <td>3</td>
      <td>978301968</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1</td>
      <td>3408</td>
      <td>4</td>
      <td>978300275</td>
    </tr>
    <tr>
      <th>4</th>
      <td>1</td>
      <td>2355</td>
      <td>5</td>
      <td>978824291</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>1000204</th>
      <td>6040</td>
      <td>1091</td>
      <td>1</td>
      <td>956716541</td>
    </tr>
    <tr>
      <th>1000205</th>
      <td>6040</td>
      <td>1094</td>
      <td>5</td>
      <td>956704887</td>
    </tr>
    <tr>
      <th>1000206</th>
      <td>6040</td>
      <td>562</td>
      <td>5</td>
      <td>956704746</td>
    </tr>
    <tr>
      <th>1000207</th>
      <td>6040</td>
      <td>1096</td>
      <td>4</td>
      <td>956715648</td>
    </tr>
    <tr>
      <th>1000208</th>
      <td>6040</td>
      <td>1097</td>
      <td>4</td>
      <td>956715569</td>
    </tr>
  </tbody>
</table>
<p>1000209 rows × 4 columns</p>
</div>

```python
# 3.使用merge函数将ratings，users和movies进行合并，保留了三个DataFrame中所有的数据，
#   并将他们之间重复的数据和行进行合并。合并生成名为data的新DataFrame，并输出整个数据以及读取第一行数据。

# 将ratings与users合并，通过userId
merged_ratings_users = pd.merge(ratings, users, on='userId')

# 将merged_ratings_users与movies合并，通过movieId
# 注意：这里我们使用left merge，保留所有ratings和用户信息，即使某些电影信息缺失
merged_data = pd.merge(merged_ratings_users, movies, on='movieId', how='left')

# 输出整个合并后的数据
print("Merged Data:")
display(merged_data)

# 输出合并后数据的第一行
print("\nFirst Row of Merged Data:")
display(merged_data.iloc[0])
```

    Merged Data:

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>userId</th>
      <th>movieId</th>
      <th>rating</th>
      <th>timestamp</th>
      <th>gender</th>
      <th>age</th>
      <th>occupation</th>
      <th>Zip-code</th>
      <th>title</th>
      <th>genres</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>1193</td>
      <td>5</td>
      <td>978300760</td>
      <td>F</td>
      <td>1</td>
      <td>10</td>
      <td>48067</td>
      <td>One Flew Over the Cuckoo's Nest (1975)</td>
      <td>Drama</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1</td>
      <td>661</td>
      <td>3</td>
      <td>978302109</td>
      <td>F</td>
      <td>1</td>
      <td>10</td>
      <td>48067</td>
      <td>James and the Giant Peach (1996)</td>
      <td>Animation|Children's|Musical</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1</td>
      <td>914</td>
      <td>3</td>
      <td>978301968</td>
      <td>F</td>
      <td>1</td>
      <td>10</td>
      <td>48067</td>
      <td>My Fair Lady (1964)</td>
      <td>Musical|Romance</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1</td>
      <td>3408</td>
      <td>4</td>
      <td>978300275</td>
      <td>F</td>
      <td>1</td>
      <td>10</td>
      <td>48067</td>
      <td>Erin Brockovich (2000)</td>
      <td>Drama</td>
    </tr>
    <tr>
      <th>4</th>
      <td>1</td>
      <td>2355</td>
      <td>5</td>
      <td>978824291</td>
      <td>F</td>
      <td>1</td>
      <td>10</td>
      <td>48067</td>
      <td>Bug's Life, A (1998)</td>
      <td>Animation|Children's|Comedy</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>1000204</th>
      <td>6040</td>
      <td>1091</td>
      <td>1</td>
      <td>956716541</td>
      <td>M</td>
      <td>25</td>
      <td>6</td>
      <td>11106</td>
      <td>Weekend at Bernie's (1989)</td>
      <td>Comedy</td>
    </tr>
    <tr>
      <th>1000205</th>
      <td>6040</td>
      <td>1094</td>
      <td>5</td>
      <td>956704887</td>
      <td>M</td>
      <td>25</td>
      <td>6</td>
      <td>11106</td>
      <td>Crying Game, The (1992)</td>
      <td>Drama|Romance|War</td>
    </tr>
    <tr>
      <th>1000206</th>
      <td>6040</td>
      <td>562</td>
      <td>5</td>
      <td>956704746</td>
      <td>M</td>
      <td>25</td>
      <td>6</td>
      <td>11106</td>
      <td>Welcome to the Dollhouse (1995)</td>
      <td>Comedy|Drama</td>
    </tr>
    <tr>
      <th>1000207</th>
      <td>6040</td>
      <td>1096</td>
      <td>4</td>
      <td>956715648</td>
      <td>M</td>
      <td>25</td>
      <td>6</td>
      <td>11106</td>
      <td>Sophie's Choice (1982)</td>
      <td>Drama</td>
    </tr>
    <tr>
      <th>1000208</th>
      <td>6040</td>
      <td>1097</td>
      <td>4</td>
      <td>956715569</td>
      <td>M</td>
      <td>25</td>
      <td>6</td>
      <td>11106</td>
      <td>E.T. the Extra-Terrestrial (1982)</td>
      <td>Children's|Drama|Fantasy|Sci-Fi</td>
    </tr>
  </tbody>
</table>
<p>1000209 rows × 10 columns</p>
</div>

    First Row of Merged Data:



    userId                                             1
    movieId                                         1193
    rating                                             5
    timestamp                                  978300760
    gender                                             F
    age                                                1
    occupation                                        10
    Zip-code                                       48067
    title         One Flew Over the Cuckoo's Nest (1975)
    genres                                         Drama
    Name: 0, dtype: object

```python
# 4.使用pivot_table函数实现数据透视表功能，对rating中title列求均值，columns参数就是用来显示字符型数据的，
#   显示性别数据。求均值生成名为mean_ratings的新DataFrame，并读取输出前五行数据。

# 使用pivot_table函数创建数据透视表
# index参数设置行索引，values参数设置要求均值的列，columns参数设置列索引（即性别数据）
# aggfunc参数设置聚合函数，这里使用'mean'求均值
mean_ratings = merged_data.pivot_table(index='title', columns='gender', values='rating', aggfunc='mean')

# 读取输出前五行数据
print("Mean Ratings Pivot Table:")
display(mean_ratings.head())
```

    Mean Ratings Pivot Table:

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th>gender</th>
      <th>F</th>
      <th>M</th>
    </tr>
    <tr>
      <th>title</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>$1,000,000 Duck (1971)</th>
      <td>3.375000</td>
      <td>2.761905</td>
    </tr>
    <tr>
      <th>'Night Mother (1986)</th>
      <td>3.388889</td>
      <td>3.352941</td>
    </tr>
    <tr>
      <th>'Til There Was You (1997)</th>
      <td>2.675676</td>
      <td>2.733333</td>
    </tr>
    <tr>
      <th>'burbs, The (1989)</th>
      <td>2.793478</td>
      <td>2.962085</td>
    </tr>
    <tr>
      <th>...And Justice for All (1979)</th>
      <td>3.828571</td>
      <td>3.689024</td>
    </tr>
  </tbody>
</table>
</div>

```python
# 5.使用groupby函数对data这一DataFrame按照电影名称title分组，并计算每个电影标题对应的评分数量。
#   第二行代码显示每个电影标题对应的评分数量。第三四行代码统计对应评分数量大于250的电影标题将其定义为active_titles并输出。

# 使用groupby函数按电影名称(title)分组，并计算每个组的评分数量
rating_counts = merged_data.groupby('title')['rating'].count()

# 显示每个电影标题对应的评分数量
print("Rating Counts per Title:")
display(rating_counts)

# 统计对应评分数量大于250的电影标题，并将其定义为active_titles
active_titles = rating_counts[rating_counts > 250].index

# 输出active_titles
print("Active Titles with More than 250 Ratings:")
display(active_titles)
```

    Rating Counts per Title:



    title
    $1,000,000 Duck (1971)                         37
    'Night Mother (1986)                           70
    'Til There Was You (1997)                      52
    'burbs, The (1989)                            303
    ...And Justice for All (1979)                 199
                                                 ...
    Zed & Two Noughts, A (1985)                    29
    Zero Effect (1998)                            301
    Zero Kelvin (Kj�rlighetens kj�tere) (1995)      2
    Zeus and Roxanne (1997)                        23
    eXistenZ (1999)                               410
    Name: rating, Length: 3706, dtype: int64


    Active Titles with More than 250 Ratings:



    Index([''burbs, The (1989)', '10 Things I Hate About You (1999)',
           '101 Dalmatians (1961)', '101 Dalmatians (1996)', '12 Angry Men (1957)',
           '13th Warrior, The (1999)', '2 Days in the Valley (1996)',
           '20,000 Leagues Under the Sea (1954)', '2001: A Space Odyssey (1968)',
           '2010 (1984)',
           ...
           'X-Men (2000)', 'Year of Living Dangerously (1982)',
           'Yellow Submarine (1968)', 'You've Got Mail (1998)',
           'Young Frankenstein (1974)', 'Young Guns (1988)',
           'Young Guns II (1990)', 'Young Sherlock Holmes (1985)',
           'Zero Effect (1998)', 'eXistenZ (1999)'],
          dtype='object', name='title', length=1214)

```python
# 6.读取mean_ratings中评分数量大于250的电影标题对应的数据并输出。

# 定义评分数量大于250的电影标题列表
active_titles = rating_counts[rating_counts > 250].index

# 使用loc函数根据index筛选mean_ratings中评分数量大于250的电影标题对应的数据
# 注意：这里假设mean_ratings的index是电影标题
active_mean_ratings = mean_ratings.loc[active_titles]

# 输出筛选后的数据
print("Mean Ratings for Active Titles with More than 250 Ratings:")
display(active_mean_ratings)
```

    Mean Ratings for Active Titles with More than 250 Ratings:

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th>gender</th>
      <th>F</th>
      <th>M</th>
    </tr>
    <tr>
      <th>title</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>'burbs, The (1989)</th>
      <td>2.793478</td>
      <td>2.962085</td>
    </tr>
    <tr>
      <th>10 Things I Hate About You (1999)</th>
      <td>3.646552</td>
      <td>3.311966</td>
    </tr>
    <tr>
      <th>101 Dalmatians (1961)</th>
      <td>3.791444</td>
      <td>3.500000</td>
    </tr>
    <tr>
      <th>101 Dalmatians (1996)</th>
      <td>3.240000</td>
      <td>2.911215</td>
    </tr>
    <tr>
      <th>12 Angry Men (1957)</th>
      <td>4.184397</td>
      <td>4.328421</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>Young Guns (1988)</th>
      <td>3.371795</td>
      <td>3.425620</td>
    </tr>
    <tr>
      <th>Young Guns II (1990)</th>
      <td>2.934783</td>
      <td>2.904025</td>
    </tr>
    <tr>
      <th>Young Sherlock Holmes (1985)</th>
      <td>3.514706</td>
      <td>3.363344</td>
    </tr>
    <tr>
      <th>Zero Effect (1998)</th>
      <td>3.864407</td>
      <td>3.723140</td>
    </tr>
    <tr>
      <th>eXistenZ (1999)</th>
      <td>3.098592</td>
      <td>3.289086</td>
    </tr>
  </tbody>
</table>
<p>1214 rows × 2 columns</p>
</div>

```python
#  7.使用rename函数将mean_ratings中Seven Samurai (The Magnificent Seven) (Shichinin no samurai) (1954)
#    重新更改为Seven Samurai (Shichinin no samurai) (1954)

# 创建一个字典，用于映射旧的标题到新的标题
title_mapping = {
    "Seven Samurai (The Magnificent Seven) (Shichinin no samurai) (1954)": "Seven Samurai (Shichinin no samurai) (1954)"
}

# 使用rename函数重命名指定的行索引
mean_ratings_renamed = mean_ratings.rename(index=title_mapping)

# 输出重命名后的数据透视表
print("Renamed Mean Ratings Pivot Table:")
display(mean_ratings_renamed)
```

    Renamed Mean Ratings Pivot Table:

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th>gender</th>
      <th>F</th>
      <th>M</th>
    </tr>
    <tr>
      <th>title</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>$1,000,000 Duck (1971)</th>
      <td>3.375000</td>
      <td>2.761905</td>
    </tr>
    <tr>
      <th>'Night Mother (1986)</th>
      <td>3.388889</td>
      <td>3.352941</td>
    </tr>
    <tr>
      <th>'Til There Was You (1997)</th>
      <td>2.675676</td>
      <td>2.733333</td>
    </tr>
    <tr>
      <th>'burbs, The (1989)</th>
      <td>2.793478</td>
      <td>2.962085</td>
    </tr>
    <tr>
      <th>...And Justice for All (1979)</th>
      <td>3.828571</td>
      <td>3.689024</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>Zed &amp; Two Noughts, A (1985)</th>
      <td>3.500000</td>
      <td>3.380952</td>
    </tr>
    <tr>
      <th>Zero Effect (1998)</th>
      <td>3.864407</td>
      <td>3.723140</td>
    </tr>
    <tr>
      <th>Zero Kelvin (Kj�rlighetens kj�tere) (1995)</th>
      <td>NaN</td>
      <td>3.500000</td>
    </tr>
    <tr>
      <th>Zeus and Roxanne (1997)</th>
      <td>2.777778</td>
      <td>2.357143</td>
    </tr>
    <tr>
      <th>eXistenZ (1999)</th>
      <td>3.098592</td>
      <td>3.289086</td>
    </tr>
  </tbody>
</table>
<p>3706 rows × 2 columns</p>
</div>

```python
#  8. 根据女性的评分使用排序函数对mean_ratings进行降序排序并输出

# 根据列'0'（女性评分）的值对mean_ratings进行降序排序
mean_ratings_sorted_by_female = mean_ratings.sort_values(by='F', ascending=False)

# 输出排序后的数据透视表
print("Mean Ratings Sorted by Female Ratings (Descending):")
print(mean_ratings_sorted_by_female)
```

    Mean Ratings Sorted by Female Ratings (Descending):
    gender                                               F         M
    title
    Clean Slate (Coup de Torchon) (1981)               5.0  3.857143
    Ballad of Narayama, The (Narayama Bushiko) (1958)  5.0  3.428571
    Raw Deal (1948)                                    5.0  3.307692
    Skipped Parts (2000)                               5.0  4.000000
    Lamerica (1994)                                    5.0  4.666667
    ...                                                ...       ...
    With Friends Like These... (1998)                  NaN  4.000000
    Wooden Man's Bride, The (Wu Kui) (1994)            NaN  3.000000
    Year of the Horse (1997)                           NaN  3.250000
    Zachariah (1971)                                   NaN  3.500000
    Zero Kelvin (Kj�rlighetens kj�tere) (1995)         NaN  3.500000

    [3706 rows x 2 columns]

```python
#  9.用mean_ratings中男性评分减去女性评分计算出男女评分差异diff

# 计算男女评分差异
diff = mean_ratings['M'] - mean_ratings['F']

# 将diff转换为DataFrame（如果它不是的话）
diff = pd.DataFrame(diff, columns=['Gender_Difference'])

# 输出男女评分差异
print("Gender Differences in Ratings:")
display(diff)
```

    Gender Differences in Ratings:

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Gender_Difference</th>
    </tr>
    <tr>
      <th>title</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>$1,000,000 Duck (1971)</th>
      <td>-0.613095</td>
    </tr>
    <tr>
      <th>'Night Mother (1986)</th>
      <td>-0.035948</td>
    </tr>
    <tr>
      <th>'Til There Was You (1997)</th>
      <td>0.057658</td>
    </tr>
    <tr>
      <th>'burbs, The (1989)</th>
      <td>0.168607</td>
    </tr>
    <tr>
      <th>...And Justice for All (1979)</th>
      <td>-0.139547</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
    </tr>
    <tr>
      <th>Zed &amp; Two Noughts, A (1985)</th>
      <td>-0.119048</td>
    </tr>
    <tr>
      <th>Zero Effect (1998)</th>
      <td>-0.141266</td>
    </tr>
    <tr>
      <th>Zero Kelvin (Kj�rlighetens kj�tere) (1995)</th>
      <td>NaN</td>
    </tr>
    <tr>
      <th>Zeus and Roxanne (1997)</th>
      <td>-0.420635</td>
    </tr>
    <tr>
      <th>eXistenZ (1999)</th>
      <td>0.190494</td>
    </tr>
  </tbody>
</table>
<p>3706 rows × 1 columns</p>
</div>

```python
#  10.根据diff列的值使用排序函数对mean_ratings进行升序排序并输出

# 确保diff的索引与mean_ratings的索引一致
diff.index = mean_ratings.index

# 根据diff列的值对mean_ratings进行升序排序
mean_ratings_sorted_by_diff = mean_ratings.loc[diff.sort_index(key=lambda x: x).index]

# 输出排序后的数据透视表
print("Mean Ratings Sorted by Gender Difference in Ascending Order:")
display(mean_ratings_sorted_by_diff)
```

    Mean Ratings Sorted by Gender Difference in Ascending Order:

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th>gender</th>
      <th>F</th>
      <th>M</th>
    </tr>
    <tr>
      <th>title</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>$1,000,000 Duck (1971)</th>
      <td>3.375000</td>
      <td>2.761905</td>
    </tr>
    <tr>
      <th>'Night Mother (1986)</th>
      <td>3.388889</td>
      <td>3.352941</td>
    </tr>
    <tr>
      <th>'Til There Was You (1997)</th>
      <td>2.675676</td>
      <td>2.733333</td>
    </tr>
    <tr>
      <th>'burbs, The (1989)</th>
      <td>2.793478</td>
      <td>2.962085</td>
    </tr>
    <tr>
      <th>...And Justice for All (1979)</th>
      <td>3.828571</td>
      <td>3.689024</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>Zed &amp; Two Noughts, A (1985)</th>
      <td>3.500000</td>
      <td>3.380952</td>
    </tr>
    <tr>
      <th>Zero Effect (1998)</th>
      <td>3.864407</td>
      <td>3.723140</td>
    </tr>
    <tr>
      <th>Zero Kelvin (Kj�rlighetens kj�tere) (1995)</th>
      <td>NaN</td>
      <td>3.500000</td>
    </tr>
    <tr>
      <th>Zeus and Roxanne (1997)</th>
      <td>2.777778</td>
      <td>2.357143</td>
    </tr>
    <tr>
      <th>eXistenZ (1999)</th>
      <td>3.098592</td>
      <td>3.289086</td>
    </tr>
  </tbody>
</table>
<p>3706 rows × 2 columns</p>
</div>

```python
# 11.使用切片操作对diff进行逆序排序，并输出

# 将diff转换为列表
diff_list = diff['Gender_Difference'].tolist()

# 使用切片操作来获取列表的逆序子集
diff_list_reversed = diff_list[::-1]

# 将逆序子集转换回pandas Series
diff_reversed = pd.Series(diff_list_reversed, index=diff.index[::-1])

# 输出逆序的diff Series
print("Gender Differences in Ratings (Reversed Order using Slicing):")
display(diff_reversed)
```

    Gender Differences in Ratings (Reversed Order using Slicing):



    title
    eXistenZ (1999)                               0.190494
    Zeus and Roxanne (1997)                      -0.420635
    Zero Kelvin (Kj�rlighetens kj�tere) (1995)         NaN
    Zero Effect (1998)                           -0.141266
    Zed & Two Noughts, A (1985)                  -0.119048
                                                    ...
    ...And Justice for All (1979)                -0.139547
    'burbs, The (1989)                            0.168607
    'Til There Was You (1997)                     0.057658
    'Night Mother (1986)                         -0.035948
    $1,000,000 Duck (1971)                       -0.613095
    Length: 3706, dtype: float64

```python
# 12.std函数用于表示标准差。对电影标题title根据评分标准差分组。并读取活跃标题（评分数量大于250的电影标题）的标准差输出

# 合并movies和ratings数据集，使用movie_id作为合并键
merged_df = pd.merge(movies, ratings, on='movieId')

# 计算每部电影的平均评分和标准差
merged_df['mean_rating'] = merged_df.groupby('title')['rating'].transform('mean')
merged_df['std_rating'] = merged_df.groupby('title')['rating'].transform('std')

# 计算每部电影的评分数量
merged_df['rating_count'] = merged_df.groupby('title')['rating'].transform('count')

# 筛选出评分数量大于250的活跃电影
active_movies = merged_df[merged_df['rating_count'] > 250]

# 根据标准差对活跃电影进行分组，并输出每组的电影标题和标准差
grouped_by_std = active_movies.groupby('std_rating')

for std_val, group in grouped_by_std:
    print(f"Standard Deviation: {std_val:.4f}")
    for title in group['title'].unique():
        print(f"  Title: {title}")
    print("-" * 50)
```

    Standard Deviation: 0.6671
      Title: Close Shave, A (1995)
    --------------------------------------------------
    Standard Deviation: 0.6889
      Title: Rear Window (1954)
    --------------------------------------------------
    Standard Deviation: 0.6926
      Title: Great Escape, The (1963)
    --------------------------------------------------
    Standard Deviation: 0.7004
      Title: Shawshank Redemption, The (1994)
    --------------------------------------------------
    Standard Deviation: 0.7087
      Title: Wrong Trousers, The (1993)
    --------------------------------------------------
    Standard Deviation: 0.7256
      Title: Raiders of the Lost Ark (1981)
    --------------------------------------------------
    Standard Deviation: 0.7325
      Title: North by Northwest (1959)
    --------------------------------------------------
    Standard Deviation: 0.7373
      Title: Hustler, The (1961)
    --------------------------------------------------
    Standard Deviation: 0.7408
      Title: Double Indemnity (1944)
    --------------------------------------------------
    Standard Deviation: 0.7409
      Title: Sunset Blvd. (a.k.a. Sunset Boulevard) (1950)
    --------------------------------------------------
    Standard Deviation: 0.7436
      Title: Seven Samurai (The Magnificent Seven) (Shichinin no samurai) (1954)
    --------------------------------------------------
    Standard Deviation: 0.7488
      Title: Usual Suspects, The (1995)
    --------------------------------------------------
    Standard Deviation: 0.7510
      Title: Notorious (1946)
    --------------------------------------------------
    Standard Deviation: 0.7539
      Title: Bridge on the River Kwai, The (1957)
    --------------------------------------------------
    Standard Deviation: 0.7576
      Title: Third Man, The (1949)
    --------------------------------------------------
    Standard Deviation: 0.7594
      Title: Sting, The (1973)
    --------------------------------------------------
    Standard Deviation: 0.7597
      Title: Verdict, The (1982)
    --------------------------------------------------
    Standard Deviation: 0.7639
      Title: Schindler's List (1993)
    --------------------------------------------------
    Standard Deviation: 0.7658
      Title: Three Days of the Condor (1975)
    --------------------------------------------------
    Standard Deviation: 0.7663
      Title: Grand Day Out, A (1992)
    --------------------------------------------------
    Standard Deviation: 0.7673
      Title: Serpico (1973)
    --------------------------------------------------
    Standard Deviation: 0.7712
      Title: Laura (1944)
    --------------------------------------------------
    Standard Deviation: 0.7715
      Title: Thin Man, The (1934)
    --------------------------------------------------
    Standard Deviation: 0.7728
      Title: Fugitive, The (1993)
    --------------------------------------------------
    Standard Deviation: 0.7731
      Title: Stand and Deliver (1987)
    --------------------------------------------------
    Standard Deviation: 0.7748
      Title: Maltese Falcon, The (1941)
    --------------------------------------------------
    Standard Deviation: 0.7760
      Title: Dial M for Murder (1954)
    --------------------------------------------------
    Standard Deviation: 0.7762
      Title: Glory (1989)
    --------------------------------------------------
    Standard Deviation: 0.7772
      Title: Big Sleep, The (1946)
    --------------------------------------------------
    Standard Deviation: 0.7781
      Title: Guns of Navarone, The (1961)
    --------------------------------------------------
    Standard Deviation: 0.7784
      Title: In the Line of Fire (1993)
    --------------------------------------------------
    Standard Deviation: 0.7801
      Title: Donnie Brasco (1997)
    --------------------------------------------------
    Standard Deviation: 0.7807
      Title: Godfather, The (1972)
    --------------------------------------------------
    Standard Deviation: 0.7807
      Title: Henry V (1989)
    --------------------------------------------------
    Standard Deviation: 0.7821
      Title: Marathon Man (1976)
    --------------------------------------------------
    Standard Deviation: 0.7827
      Title: Manchurian Candidate, The (1962)
    --------------------------------------------------
    Standard Deviation: 0.7834
      Title: Cool Hand Luke (1967)
    --------------------------------------------------
    Standard Deviation: 0.7842
      Title: Key Largo (1948)
    --------------------------------------------------
    Standard Deviation: 0.7847
      Title: Where Eagles Dare (1969)
    --------------------------------------------------
    Standard Deviation: 0.7870
      Title: Stalag 17 (1953)
    --------------------------------------------------
    Standard Deviation: 0.7875
      Title: In the Heat of the Night (1967)
    --------------------------------------------------
    Standard Deviation: 0.7887
      Title: Raise the Red Lantern (1991)
    --------------------------------------------------
    Standard Deviation: 0.7889
      Title: To Kill a Mockingbird (1962)
    --------------------------------------------------
    Standard Deviation: 0.7892
      Title: Paper Chase, The (1973)
    --------------------------------------------------
    Standard Deviation: 0.7895
      Title: One Flew Over the Cuckoo's Nest (1975)
    --------------------------------------------------
    Standard Deviation: 0.7917
      Title: Creature Comforts (1990)
    --------------------------------------------------
    Standard Deviation: 0.7924
      Title: Untouchables, The (1987)
    --------------------------------------------------
    Standard Deviation: 0.7926
      Title: Strangers on a Train (1951)
    --------------------------------------------------
    Standard Deviation: 0.7930
      Title: Bicycle Thief, The (Ladri di biciclette) (1948)
    --------------------------------------------------
    Standard Deviation: 0.7949
      Title: When We Were Kings (1996)
    --------------------------------------------------
    Standard Deviation: 0.7959
      Title: Witness (1985)
    --------------------------------------------------
    Standard Deviation: 0.7965
      Title: Shall We Dance? (Shall We Dansu?) (1996)
    --------------------------------------------------
    Standard Deviation: 0.7966
      Title: Vertigo (1958)
    --------------------------------------------------
    Standard Deviation: 0.7967
      Title: Stand by Me (1986)
    --------------------------------------------------
    Standard Deviation: 0.7978
      Title: Papillon (1973)
    --------------------------------------------------
    Standard Deviation: 0.7981
      Title: Breaking Away (1979)
    --------------------------------------------------
    Standard Deviation: 0.8008
      Title: Star Wars: Episode IV - A New Hope (1977)
    --------------------------------------------------
    Standard Deviation: 0.8010
      Title: Sixth Sense, The (1999)
    --------------------------------------------------
    Standard Deviation: 0.8016
      Title: Apollo 13 (1995)
    --------------------------------------------------
    Standard Deviation: 0.8025
      Title: Treasure of the Sierra Madre, The (1948)
    --------------------------------------------------
    Standard Deviation: 0.8042
      Title: Killing Fields, The (1984)
    --------------------------------------------------
    Standard Deviation: 0.8046
      Title: Butch Cassidy and the Sundance Kid (1969)
    --------------------------------------------------
    Standard Deviation: 0.8047
      Title: It Happened One Night (1934)
    --------------------------------------------------
    Standard Deviation: 0.8048
      Title: And Now for Something Completely Different (1971)
    --------------------------------------------------
    Standard Deviation: 0.8050
      Title: Wallace & Gromit: The Best of Aardman Animation (1996)
    --------------------------------------------------
    Standard Deviation: 0.8055
      Title: Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb (1963)
    --------------------------------------------------
    Standard Deviation: 0.8056
      Title: Mr. Smith Goes to Washington (1939)
    --------------------------------------------------
    Standard Deviation: 0.8059
      Title: Eat Drink Man Woman (1994)
    --------------------------------------------------
    Standard Deviation: 0.8060
      Title: Dave (1993)
    --------------------------------------------------
    Standard Deviation: 0.8067
      Title: Trading Places (1983)
    --------------------------------------------------
    Standard Deviation: 0.8073
      Title: Inherit the Wind (1960)
    --------------------------------------------------
    Standard Deviation: 0.8077
      Title: Patton (1970)
    --------------------------------------------------
    Standard Deviation: 0.8090
      Title: Apartment, The (1960)
    --------------------------------------------------
    Standard Deviation: 0.8100
      Title: Odd Couple, The (1968)
    --------------------------------------------------
    Standard Deviation: 0.8106
      Title: To Catch a Thief (1955)
    --------------------------------------------------
    Standard Deviation: 0.8108
      Title: His Girl Friday (1940)
    --------------------------------------------------
    Standard Deviation: 0.8110
      Title: Quiz Show (1994)
    --------------------------------------------------
    Standard Deviation: 0.8114
      Title: Rainmaker, The (1997)
    --------------------------------------------------
    Standard Deviation: 0.8116
      Title: Almost Famous (2000)
    --------------------------------------------------
    Standard Deviation: 0.8127
      Title: 12 Angry Men (1957)
    --------------------------------------------------
    Standard Deviation: 0.8133
      Title: Searching for Bobby Fischer (1993)
    --------------------------------------------------
    Standard Deviation: 0.8135
      Title: Dr. No (1962)
    --------------------------------------------------
    Standard Deviation: 0.8136
      Title: Rebecca (1940)
    --------------------------------------------------
    Standard Deviation: 0.8136
      Title: Taking of Pelham One Two Three, The (1974)
    --------------------------------------------------
    Standard Deviation: 0.8151
      Title: Color of Money, The (1986)
    --------------------------------------------------
    Standard Deviation: 0.8163
      Title: Breaker Morant (1980)
    --------------------------------------------------
    Standard Deviation: 0.8174
      Title: Red Rock West (1992)
    --------------------------------------------------
    Standard Deviation: 0.8178
      Title: Indiana Jones and the Last Crusade (1989)
    --------------------------------------------------
    Standard Deviation: 0.8186
      Title: Big Night (1996)
    --------------------------------------------------
    Standard Deviation: 0.8187
      Title: Chinatown (1974)
    --------------------------------------------------
    Standard Deviation: 0.8188
      Title: Mister Roberts (1955)
    --------------------------------------------------
    Standard Deviation: 0.8189
      Title: Rain Man (1988)
    --------------------------------------------------
    Standard Deviation: 0.8203
      Title: Cape Fear (1991)
    --------------------------------------------------
    Standard Deviation: 0.8205
      Title: Pale Rider (1985)
    --------------------------------------------------
    Standard Deviation: 0.8206
      Title: African Queen, The (1951)
    --------------------------------------------------
    Standard Deviation: 0.8206
      Title: Midnight Express (1978)
    --------------------------------------------------
    Standard Deviation: 0.8208
      Title: Fistful of Dollars, A (1964)
    --------------------------------------------------
    Standard Deviation: 0.8209
      Title: Bonnie and Clyde (1967)
    --------------------------------------------------
    Standard Deviation: 0.8212
      Title: Conversation, The (1974)
    --------------------------------------------------
    Standard Deviation: 0.8215
      Title: Blood Simple (1984)
    --------------------------------------------------
    Standard Deviation: 0.8216
      Title: Some Like It Hot (1959)
    --------------------------------------------------
    Standard Deviation: 0.8216
      Title: Courage Under Fire (1996)
    --------------------------------------------------
    Standard Deviation: 0.8225
      Title: Fantastic Voyage (1966)
    --------------------------------------------------
    Standard Deviation: 0.8226
      Title: Patriot Games (1992)
    --------------------------------------------------
    Standard Deviation: 0.8227
      Title: Lawrence of Arabia (1962)
    --------------------------------------------------
    Standard Deviation: 0.8234
      Title: Amadeus (1984)
    --------------------------------------------------
    Standard Deviation: 0.8241
      Title: Clear and Present Danger (1994)
    --------------------------------------------------
    Standard Deviation: 0.8242
      Title: Boat, The (Das Boot) (1981)
    --------------------------------------------------
    Standard Deviation: 0.8244
      Title: Elephant Man, The (1980)
    --------------------------------------------------
    Standard Deviation: 0.8245
      Title: Right Stuff, The (1983)
    --------------------------------------------------
    Standard Deviation: 0.8246
      Title: From Russia with Love (1963)
    --------------------------------------------------
    Standard Deviation: 0.8249
      Title: Hunt for Red October, The (1990)
    --------------------------------------------------
    Standard Deviation: 0.8253
      Title: Charade (1963)
    --------------------------------------------------
    Standard Deviation: 0.8254
      Title: Dirty Dozen, The (1967)
    --------------------------------------------------
    Standard Deviation: 0.8260
      Title: Man Who Would Be King, The (1975)
    --------------------------------------------------
    Standard Deviation: 0.8261
      Title: Commitments, The (1991)
    --------------------------------------------------
    Standard Deviation: 0.8262
      Title: City Lights (1931)
    --------------------------------------------------
    Standard Deviation: 0.8269
      Title: Spy Who Loved Me, The (1977)
    --------------------------------------------------
    Standard Deviation: 0.8273
      Title: French Connection, The (1971)
    --------------------------------------------------
    Standard Deviation: 0.8275
      Title: Primary Colors (1998)
    --------------------------------------------------
    Standard Deviation: 0.8276
      Title: Casablanca (1942)
    --------------------------------------------------
    Standard Deviation: 0.8284
      Title: Of Mice and Men (1992)
    --------------------------------------------------
    Standard Deviation: 0.8285
      Title: My Favorite Year (1982)
    --------------------------------------------------
    Standard Deviation: 0.8286
      Title: Take the Money and Run (1969)
    --------------------------------------------------
    Standard Deviation: 0.8289
      Title: M (1931)
    --------------------------------------------------
    Standard Deviation: 0.8294
      Title: In the Name of the Father (1993)
    --------------------------------------------------
    Standard Deviation: 0.8294
      Title: Firm, The (1993)
    --------------------------------------------------
    Standard Deviation: 0.8297
      Title: Cape Fear (1962)
    --------------------------------------------------
    Standard Deviation: 0.8307
      Title: Bamba, La (1987)
    --------------------------------------------------
    Standard Deviation: 0.8315
      Title: Silence of the Lambs, The (1991)
    --------------------------------------------------
    Standard Deviation: 0.8318
      Title: Primal Fear (1996)
    --------------------------------------------------
    Standard Deviation: 0.8320
      Title: Good Will Hunting (1997)
    --------------------------------------------------
    Standard Deviation: 0.8323
      Title: Mrs. Brown (Her Majesty, Mrs. Brown) (1997)
    --------------------------------------------------
    Standard Deviation: 0.8331
      Title: Dog Day Afternoon (1975)
    --------------------------------------------------
    Standard Deviation: 0.8337
      Title: Graduate, The (1967)
    --------------------------------------------------
    Standard Deviation: 0.8338
      Title: Falcon and the Snowman, The (1984)
    --------------------------------------------------
    Standard Deviation: 0.8339
      Title: On the Waterfront (1954)
    --------------------------------------------------
    Standard Deviation: 0.8343
      Title: Philadelphia Story, The (1940)
    --------------------------------------------------
    Standard Deviation: 0.8356
      Title: All About Eve (1950)
    --------------------------------------------------
    Standard Deviation: 0.8357
      Title: Roman Holiday (1953)
    --------------------------------------------------
    Standard Deviation: 0.8359
      Title: Body Heat (1981)
    --------------------------------------------------
    Standard Deviation: 0.8364
      Title: Thunderball (1965)
    --------------------------------------------------
    Standard Deviation: 0.8369
      Title: Arsenic and Old Lace (1944)
    --------------------------------------------------
    Standard Deviation: 0.8375
      Title: Hoop Dreams (1994)
    --------------------------------------------------
    Standard Deviation: 0.8394
      Title: Thin Blue Line, The (1988)
    --------------------------------------------------
    Standard Deviation: 0.8408
      Title: Cinema Paradiso (1988)
    --------------------------------------------------
    Standard Deviation: 0.8409
      Title: American Graffiti (1973)
    --------------------------------------------------
    Standard Deviation: 0.8413
      Title: Man with the Golden Gun, The (1974)
    --------------------------------------------------
    Standard Deviation: 0.8420
      Title: Goldfinger (1964)
    --------------------------------------------------
    Standard Deviation: 0.8425
      Title: Gandhi (1982)
    --------------------------------------------------
    Standard Deviation: 0.8427
      Title: Top Hat (1935)
    --------------------------------------------------
    Standard Deviation: 0.8442
      Title: L.A. Confidential (1997)
    --------------------------------------------------
    Standard Deviation: 0.8444
      Title: Star Wars: Episode V - The Empire Strikes Back (1980)
    --------------------------------------------------
    Standard Deviation: 0.8446
      Title: Little Big Man (1970)
    --------------------------------------------------
    Standard Deviation: 0.8448
      Title: Kelly's Heroes (1970)
    --------------------------------------------------
    Standard Deviation: 0.8458
      Title: Saving Private Ryan (1998)
    --------------------------------------------------
    Standard Deviation: 0.8468
      Title: Live and Let Die (1973)
    --------------------------------------------------
    Standard Deviation: 0.8472
      Title: Alive (1993)
    --------------------------------------------------
    Standard Deviation: 0.8475
      Title: People vs. Larry Flynt, The (1996)
    --------------------------------------------------
    Standard Deviation: 0.8477
      Title: Streetcar Named Desire, A (1951)
    --------------------------------------------------
    Standard Deviation: 0.8478
      Title: Children of a Lesser God (1986)
    --------------------------------------------------
    Standard Deviation: 0.8478
      Title: All Quiet on the Western Front (1930)
    --------------------------------------------------
    Standard Deviation: 0.8480
      Title: Good Morning, Vietnam (1987)
    --------------------------------------------------
    Standard Deviation: 0.8483
      Title: Ran (1985)
    --------------------------------------------------
    Standard Deviation: 0.8494
      Title: Rounders (1998)
    --------------------------------------------------
    Standard Deviation: 0.8497
      Title: October Sky (1999)
    --------------------------------------------------
    Standard Deviation: 0.8500
      Title: F/X (1986)
    --------------------------------------------------
    Standard Deviation: 0.8500
      Title: Princess Bride, The (1987)
    --------------------------------------------------
    Standard Deviation: 0.8505
      Title: Some Folks Call It a Sling Blade (1993)
    --------------------------------------------------
    Standard Deviation: 0.8511
      Title: Farewell My Concubine (1993)
    --------------------------------------------------
    Standard Deviation: 0.8513
      Title: Dreamscape (1984)
    --------------------------------------------------
    Standard Deviation: 0.8513
      Title: Rebel Without a Cause (1955)
    --------------------------------------------------
    Standard Deviation: 0.8513
      Title: Say Anything... (1989)
    --------------------------------------------------
    Standard Deviation: 0.8523
      Title: American History X (1998)
    --------------------------------------------------
    Standard Deviation: 0.8523
      Title: Few Good Men, A (1992)
    --------------------------------------------------
    Standard Deviation: 0.8523
      Title: Toy Story (1995)
    --------------------------------------------------
    Standard Deviation: 0.8526
      Title: Terminator, The (1984)
    --------------------------------------------------
    Standard Deviation: 0.8527
      Title: Guess Who's Coming to Dinner (1967)
    --------------------------------------------------
    Standard Deviation: 0.8527
      Title: Klute (1971)
    --------------------------------------------------
    Standard Deviation: 0.8528
      Title: Negotiator, The (1998)
    --------------------------------------------------
    Standard Deviation: 0.8528
      Title: Cat on a Hot Tin Roof (1958)
    --------------------------------------------------
    Standard Deviation: 0.8535
      Title: 39 Steps, The (1935)
    --------------------------------------------------
    Standard Deviation: 0.8544
      Title: High Plains Drifter (1972)
    --------------------------------------------------
    Standard Deviation: 0.8552
      Title: Civil Action, A (1998)
    --------------------------------------------------
    Standard Deviation: 0.8565
      Title: Honeymoon in Vegas (1992)
    --------------------------------------------------
    Standard Deviation: 0.8570
      Title: Day the Earth Stood Still, The (1951)
    --------------------------------------------------
    Standard Deviation: 0.8573
      Title: Insider, The (1999)
    --------------------------------------------------
    Standard Deviation: 0.8574
      Title: Crimson Tide (1995)
    --------------------------------------------------
    Standard Deviation: 0.8576
      Title: Manhattan Murder Mystery (1993)
    --------------------------------------------------
    Standard Deviation: 0.8581
      Title: Singles (1992)
    --------------------------------------------------
    Standard Deviation: 0.8581
      Title: Circle of Friends (1995)
    --------------------------------------------------
    Standard Deviation: 0.8584
      Title: Awakenings (1990)
    --------------------------------------------------
    Standard Deviation: 0.8584
      Title: For a Few Dollars More (1965)
    --------------------------------------------------
    Standard Deviation: 0.8587
      Title: From Here to Eternity (1953)
    --------------------------------------------------
    Standard Deviation: 0.8589
      Title: Splash (1984)
    --------------------------------------------------
    Standard Deviation: 0.8595
      Title: Dead Again (1991)
    --------------------------------------------------
    Standard Deviation: 0.8600
      Title: Broadcast News (1987)
    --------------------------------------------------
    Standard Deviation: 0.8602
      Title: Presidio, The (1988)
    --------------------------------------------------
    Standard Deviation: 0.8610
      Title: Die Hard (1988)
    --------------------------------------------------
    Standard Deviation: 0.8611
      Title: Professional, The (a.k.a. Leon: The Professional) (1994)
    --------------------------------------------------
    Standard Deviation: 0.8611
      Title: Sling Blade (1996)
    --------------------------------------------------
    Standard Deviation: 0.8622
      Title: Bronx Tale, A (1993)
    --------------------------------------------------
    Standard Deviation: 0.8623
      Title: Full Metal Jacket (1987)
    --------------------------------------------------
    Standard Deviation: 0.8624
      Title: Ferris Bueller's Day Off (1986)
    --------------------------------------------------
    Standard Deviation: 0.8624
      Title: Midnight Run (1988)
    --------------------------------------------------
    Standard Deviation: 0.8632
      Title: Sneakers (1992)
    --------------------------------------------------
    Standard Deviation: 0.8641
      Title: It Could Happen to You (1994)
    --------------------------------------------------
    Standard Deviation: 0.8642
      Title: Harvey (1950)
    --------------------------------------------------
    Standard Deviation: 0.8644
      Title: American President, The (1995)
    --------------------------------------------------
    Standard Deviation: 0.8648
      Title: Heaven Can Wait (1978)
    --------------------------------------------------
    Standard Deviation: 0.8648
      Title: League of Their Own, A (1992)
    --------------------------------------------------
    Standard Deviation: 0.8652
      Title: Back to the Future (1985)
    --------------------------------------------------
    Standard Deviation: 0.8652
      Title: Romancing the Stone (1984)
    --------------------------------------------------
    Standard Deviation: 0.8655
      Title: Citizen Kane (1941)
    --------------------------------------------------
    Standard Deviation: 0.8656
      Title: Platoon (1986)
    --------------------------------------------------
    Standard Deviation: 0.8662
      Title: Raging Bull (1980)
    --------------------------------------------------
    Standard Deviation: 0.8663
      Title: Manhattan (1979)
    --------------------------------------------------
    Standard Deviation: 0.8665
      Title: Outlaw Josey Wales, The (1976)
    --------------------------------------------------
    Standard Deviation: 0.8666
      Title: Lethal Weapon (1987)
    --------------------------------------------------
    Standard Deviation: 0.8673
      Title: Dead Man Walking (1995)
    --------------------------------------------------
    Standard Deviation: 0.8684
      Title: Devil in a Blue Dress (1995)
    --------------------------------------------------
    Standard Deviation: 0.8689
      Title: Godfather: Part II, The (1974)
    --------------------------------------------------
    Standard Deviation: 0.8689
      Title: Dead Calm (1989)
    --------------------------------------------------
    Standard Deviation: 0.8697
      Title: 20,000 Leagues Under the Sea (1954)
    --------------------------------------------------
    Standard Deviation: 0.8702
      Title: Spartacus (1960)
    --------------------------------------------------
    Standard Deviation: 0.8710
      Title: Mr. Mom (1983)
    --------------------------------------------------
    Standard Deviation: 0.8712
      Title: Diner (1982)
    --------------------------------------------------
    Standard Deviation: 0.8712
      Title: Run Lola Run (Lola rennt) (1998)
    --------------------------------------------------
    Standard Deviation: 0.8716
      Title: Swiss Family Robinson (1960)
    --------------------------------------------------
    Standard Deviation: 0.8722
      Title: No Way Out (1987)
    --------------------------------------------------
    Standard Deviation: 0.8725
      Title: GoodFellas (1990)
    --------------------------------------------------
    Standard Deviation: 0.8726
      Title: Hidden, The (1987)
    --------------------------------------------------
    Standard Deviation: 0.8728
      Title: Young Frankenstein (1974)
    --------------------------------------------------
    Standard Deviation: 0.8733
      Title: Tequila Sunrise (1988)
    --------------------------------------------------
    Standard Deviation: 0.8735
      Title: Carlito's Way (1993)
    --------------------------------------------------
    Standard Deviation: 0.8739
      Title: My Fair Lady (1964)
    --------------------------------------------------
    Standard Deviation: 0.8739
      Title: Monty Python and the Holy Grail (1974)
    --------------------------------------------------
    Standard Deviation: 0.8742
      Title: Client, The (1994)
    --------------------------------------------------
    Standard Deviation: 0.8742
      Title: Benny & Joon (1993)
    --------------------------------------------------
    Standard Deviation: 0.8747
      Title: Natural, The (1984)
    --------------------------------------------------
    Standard Deviation: 0.8750
      Title: Hamlet (1990)
    --------------------------------------------------
    Standard Deviation: 0.8751
      Title: Blade Runner (1982)
    --------------------------------------------------
    Standard Deviation: 0.8752
      Title: Best in Show (2000)
    --------------------------------------------------
    Standard Deviation: 0.8759
      Title: Atlantic City (1980)
    --------------------------------------------------
    Standard Deviation: 0.8759
      Title: War of the Worlds, The (1953)
    --------------------------------------------------
    Standard Deviation: 0.8763
      Title: Waiting for Guffman (1996)
    --------------------------------------------------
    Standard Deviation: 0.8766
      Title: Longest Day, The (1962)
    --------------------------------------------------
    Standard Deviation: 0.8770
      Title: Producers, The (1968)
    --------------------------------------------------
    Standard Deviation: 0.8772
      Title: For Your Eyes Only (1981)
    --------------------------------------------------
    Standard Deviation: 0.8772
      Title: Stir of Echoes (1999)
    --------------------------------------------------
    Standard Deviation: 0.8779
      Title: Sabrina (1954)
    --------------------------------------------------
    Standard Deviation: 0.8780
      Title: Six Degrees of Separation (1993)
    --------------------------------------------------
    Standard Deviation: 0.8780
      Title: Three Colors: Red (1994)
    --------------------------------------------------
    Standard Deviation: 0.8780
      Title: Hoosiers (1986)
    --------------------------------------------------
    Standard Deviation: 0.8785
      Title: Shallow Grave (1994)
    --------------------------------------------------
    Standard Deviation: 0.8792
      Title: EDtv (1999)
    --------------------------------------------------
    Standard Deviation: 0.8793
      Title: Bug's Life, A (1998)
    --------------------------------------------------
    Standard Deviation: 0.8793
      Title: Flamingo Kid, The (1984)
    --------------------------------------------------
    Standard Deviation: 0.8794
      Title: Working Girl (1988)
    --------------------------------------------------
    Standard Deviation: 0.8797
      Title: Grosse Pointe Blank (1997)
    --------------------------------------------------
    Standard Deviation: 0.8798
      Title: High Noon (1952)
    --------------------------------------------------
    Standard Deviation: 0.8802
      Title: Much Ado About Nothing (1993)
    --------------------------------------------------
    Standard Deviation: 0.8805
      Title: Wonder Boys (2000)
    --------------------------------------------------
    Standard Deviation: 0.8810
      Title: Year of Living Dangerously (1982)
    --------------------------------------------------
    Standard Deviation: 0.8811
      Title: When Harry Met Sally... (1989)
    --------------------------------------------------
    Standard Deviation: 0.8818
      Title: Holiday Inn (1942)
    --------------------------------------------------
    Standard Deviation: 0.8821
      Title: Women on the Verge of a Nervous Breakdown (1988)
    --------------------------------------------------
    Standard Deviation: 0.8822
      Title: Crocodile Dundee (1986)
    --------------------------------------------------
    Standard Deviation: 0.8828
      Title: My Cousin Vinny (1992)
    --------------------------------------------------
    Standard Deviation: 0.8834
      Title: Outsiders, The (1983)
    --------------------------------------------------
    Standard Deviation: 0.8835
      Title: Truman Show, The (1998)
    --------------------------------------------------
    Standard Deviation: 0.8836
      Title: Madness of King George, The (1994)
    --------------------------------------------------
    Standard Deviation: 0.8839
      Title: My Life as a Dog (Mitt liv som hund) (1985)
    --------------------------------------------------
    Standard Deviation: 0.8842
      Title: Touch of Evil (1958)
    --------------------------------------------------
    Standard Deviation: 0.8843
      Title: Ghostbusters (1984)
    --------------------------------------------------
    Standard Deviation: 0.8848
      Title: Taxi Driver (1976)
    --------------------------------------------------
    Standard Deviation: 0.8854
      Title: Big (1988)
    --------------------------------------------------
    Standard Deviation: 0.8855
      Title: Cocoon (1985)
    --------------------------------------------------
    Standard Deviation: 0.8860
      Title: Parenthood (1989)
    --------------------------------------------------
    Standard Deviation: 0.8867
      Title: Modern Times (1936)
    --------------------------------------------------
    Standard Deviation: 0.8874
      Title: Running Scared (1986)
    --------------------------------------------------
    Standard Deviation: 0.8875
      Title: River Wild, The (1994)
    --------------------------------------------------
    Standard Deviation: 0.8875
      Title: I.Q. (1994)
    --------------------------------------------------
    Standard Deviation: 0.8876
      Title: Kramer Vs. Kramer (1979)
    --------------------------------------------------
    Standard Deviation: 0.8883
      Title: Perfect Murder, A (1998)
    --------------------------------------------------
    Standard Deviation: 0.8885
      Title: Fabulous Baker Boys, The (1989)
    --------------------------------------------------
    Standard Deviation: 0.8886
      Title: Speed 2: Cruise Control (1997)
    --------------------------------------------------
    Standard Deviation: 0.8889
      Title: Singin' in the Rain (1952)
    --------------------------------------------------
    Standard Deviation: 0.8892
      Title: Ulee's Gold (1997)
    --------------------------------------------------
    Standard Deviation: 0.8893
      Title: Player, The (1992)
    --------------------------------------------------
    Standard Deviation: 0.8894
      Title: Elizabeth (1998)
    --------------------------------------------------
    Standard Deviation: 0.8900
      Title: Psycho (1960)
    --------------------------------------------------
    Standard Deviation: 0.8902
      Title: Karate Kid, The (1984)
    --------------------------------------------------
    Standard Deviation: 0.8910
      Title: Diva (1981)
    --------------------------------------------------
    Standard Deviation: 0.8912
      Title: Young Sherlock Holmes (1985)
    --------------------------------------------------
    Standard Deviation: 0.8912
      Title: GoldenEye (1995)
    --------------------------------------------------
    Standard Deviation: 0.8917
      Title: Absolute Power (1997)
    --------------------------------------------------
    Standard Deviation: 0.8917
      Title: Bananas (1971)
    --------------------------------------------------
    Standard Deviation: 0.8920
      Title: Good, The Bad and The Ugly, The (1966)
    --------------------------------------------------
    Standard Deviation: 0.8923
      Title: Single White Female (1992)
    --------------------------------------------------
    Standard Deviation: 0.8930
      Title: Toy Story 2 (1999)
    --------------------------------------------------
    Standard Deviation: 0.8930
      Title: Backdraft (1991)
    --------------------------------------------------
    Standard Deviation: 0.8931
      Title: Secrets & Lies (1996)
    --------------------------------------------------
    Standard Deviation: 0.8932
      Title: Nikita (La Femme Nikita) (1990)
    --------------------------------------------------
    Standard Deviation: 0.8933
      Title: Goodbye Girl, The (1977)
    --------------------------------------------------
    Standard Deviation: 0.8936
      Title: Ben-Hur (1959)
    --------------------------------------------------
    Standard Deviation: 0.8943
      Title: Tomorrow Never Dies (1997)
    --------------------------------------------------
    Standard Deviation: 0.8945
      Title: Around the World in 80 Days (1956)
    --------------------------------------------------
    Standard Deviation: 0.8948
      Title: Dead Zone, The (1983)
    --------------------------------------------------
    Standard Deviation: 0.8949
      Title: Enemy of the State (1998)
    --------------------------------------------------
    Standard Deviation: 0.8949
      Title: Misery (1990)
    --------------------------------------------------
    Standard Deviation: 0.8952
      Title: Crimes and Misdemeanors (1989)
    --------------------------------------------------
    Standard Deviation: 0.8958
      Title: Heartbreak Ridge (1986)
    --------------------------------------------------
    Standard Deviation: 0.8959
      Title: Erin Brockovich (2000)
    --------------------------------------------------
    Standard Deviation: 0.8960
      Title: Wizard of Oz, The (1939)
    --------------------------------------------------
    Standard Deviation: 0.8972
      Title: X-Files: Fight the Future, The (1998)
    --------------------------------------------------
    Standard Deviation: 0.8973
      Title: Postino, Il (The Postman) (1994)
    --------------------------------------------------
    Standard Deviation: 0.8974
      Title: Game, The (1997)
    --------------------------------------------------
    Standard Deviation: 0.8979
      Title: Cider House Rules, The (1999)
    --------------------------------------------------
    Standard Deviation: 0.8982
      Title: Miller's Crossing (1990)
    --------------------------------------------------
    Standard Deviation: 0.8983
      Title: Better Off Dead... (1985)
    --------------------------------------------------
    Standard Deviation: 0.8986
      Title: Keeping the Faith (2000)
    --------------------------------------------------
    Standard Deviation: 0.8991
      Title: Rush Hour (1998)
    --------------------------------------------------
    Standard Deviation: 0.8995
      Title: Stripes (1981)
    --------------------------------------------------
    Standard Deviation: 0.8997
      Title: Last Picture Show, The (1971)
    --------------------------------------------------
    Standard Deviation: 0.9000
      Title: Straight Story, The (1999)
    --------------------------------------------------
    Standard Deviation: 0.9001
      Title: Murder at 1600 (1997)
    --------------------------------------------------
    Standard Deviation: 0.9001
      Title: Close Encounters of the Third Kind (1977)
    --------------------------------------------------
    Standard Deviation: 0.9005
      Title: Everything You Always Wanted to Know About Sex (1972)
    --------------------------------------------------
    Standard Deviation: 0.9006
      Title: Christmas Story, A (1983)
    --------------------------------------------------
    Standard Deviation: 0.9014
      Title: Boiler Room (2000)
    --------------------------------------------------
    Standard Deviation: 0.9016
      Title: What's Eating Gilbert Grape (1993)
    --------------------------------------------------
    Standard Deviation: 0.9017
      Title: Sixteen Candles (1984)
    --------------------------------------------------
    Standard Deviation: 0.9019
      Title: Lady and the Tramp (1955)
    --------------------------------------------------
    Standard Deviation: 0.9021
      Title: Sleeper (1973)
    --------------------------------------------------
    Standard Deviation: 0.9025
      Title: Rules of Engagement (2000)
    --------------------------------------------------
    Standard Deviation: 0.9025
      Title: Fools Rush In (1997)
    --------------------------------------------------
    Standard Deviation: 0.9032
      Title: Philadelphia (1993)
    --------------------------------------------------
    Standard Deviation: 0.9033
      Title: M*A*S*H (1970)
    --------------------------------------------------
    Standard Deviation: 0.9035
      Title: Pretty in Pink (1986)
    --------------------------------------------------
    Standard Deviation: 0.9036
      Title: Sweet Hereafter, The (1997)
    --------------------------------------------------
    Standard Deviation: 0.9037
      Title: L.A. Story (1991)
    --------------------------------------------------
    Standard Deviation: 0.9040
      Title: Mulholland Falls (1996)
    --------------------------------------------------
    Standard Deviation: 0.9045
      Title: Sense and Sensibility (1995)
    --------------------------------------------------
    Standard Deviation: 0.9048
      Title: Terminator 2: Judgment Day (1991)
    --------------------------------------------------
    Standard Deviation: 0.9051
      Title: Casino (1995)
    --------------------------------------------------
    Standard Deviation: 0.9054
      Title: Hud (1963)
    --------------------------------------------------
    Standard Deviation: 0.9054
      Title: Mosquito Coast, The (1986)
    --------------------------------------------------
    Standard Deviation: 0.9054
      Title: It's a Wonderful Life (1946)
    --------------------------------------------------
    Standard Deviation: 0.9056
      Title: Drugstore Cowboy (1989)
    --------------------------------------------------
    Standard Deviation: 0.9059
      Title: Risky Business (1983)
    --------------------------------------------------
    Standard Deviation: 0.9059
      Title: Sword in the Stone, The (1963)
    --------------------------------------------------
    Standard Deviation: 0.9060
      Title: Scrooged (1988)
    --------------------------------------------------
    Standard Deviation: 0.9062
      Title: Truth About Cats & Dogs, The (1996)
    --------------------------------------------------
    Standard Deviation: 0.9065
      Title: Malcolm X (1992)
    --------------------------------------------------
    Standard Deviation: 0.9070
      Title: Pacific Heights (1990)
    --------------------------------------------------
    Standard Deviation: 0.9071
      Title: Star Trek III: The Search for Spock (1984)
    --------------------------------------------------
    Standard Deviation: 0.9074
      Title: My Left Foot (1989)
    --------------------------------------------------
    Standard Deviation: 0.9075
      Title: Driving Miss Daisy (1989)
    --------------------------------------------------
    Standard Deviation: 0.9086
      Title: Midnight Cowboy (1969)
    --------------------------------------------------
    Standard Deviation: 0.9090
      Title: Lone Star (1996)
    --------------------------------------------------
    Standard Deviation: 0.9103
      Title: Jackie Brown (1997)
    --------------------------------------------------
    Standard Deviation: 0.9106
      Title: Network (1976)
    --------------------------------------------------
    Standard Deviation: 0.9108
      Title: Jerry Maguire (1996)
    --------------------------------------------------
    Standard Deviation: 0.9111
      Title: Breakfast Club, The (1985)
    --------------------------------------------------
    Standard Deviation: 0.9113
      Title: Sweet and Lowdown (1999)
    --------------------------------------------------
    Standard Deviation: 0.9113
      Title: Watership Down (1978)
    --------------------------------------------------
    Standard Deviation: 0.9115
      Title: Liar Liar (1997)
    --------------------------------------------------
    Standard Deviation: 0.9122
      Title: Adventures of Robin Hood, The (1938)
    --------------------------------------------------
    Standard Deviation: 0.9123
      Title: Name of the Rose, The (1986)
    --------------------------------------------------
    Standard Deviation: 0.9124
      Title: View to a Kill, A (1985)
    --------------------------------------------------
    Standard Deviation: 0.9124
      Title: Last Emperor, The (1987)
    --------------------------------------------------
    Standard Deviation: 0.9124
      Title: Dead Poets Society (1989)
    --------------------------------------------------
    Standard Deviation: 0.9129
      Title: Harold and Maude (1971)
    --------------------------------------------------
    Standard Deviation: 0.9132
      Title: Return of the Pink Panther, The (1974)
    --------------------------------------------------
    Standard Deviation: 0.9133
      Title: Alien (1979)
    --------------------------------------------------
    Standard Deviation: 0.9137
      Title: Purple Rose of Cairo, The (1985)
    --------------------------------------------------
    Standard Deviation: 0.9138
      Title: Jungle Book, The (1967)
    --------------------------------------------------
    Standard Deviation: 0.9140
      Title: Mighty Aphrodite (1995)
    --------------------------------------------------
    Standard Deviation: 0.9144
      Title: King and I, The (1956)
    --------------------------------------------------
    Standard Deviation: 0.9150
      Title: Night Shift (1982)
    --------------------------------------------------
    Standard Deviation: 0.9151
      Title: X-Men (2000)
    --------------------------------------------------
    Standard Deviation: 0.9152
      Title: Duck Soup (1933)
    --------------------------------------------------
    Standard Deviation: 0.9153
      Title: Cop Land (1997)
    --------------------------------------------------
    Standard Deviation: 0.9153
      Title: Poseidon Adventure, The (1972)
    --------------------------------------------------
    Standard Deviation: 0.9153
      Title: Apocalypse Now (1979)
    --------------------------------------------------
    Standard Deviation: 0.9154
      Title: Romeo and Juliet (1968)
    --------------------------------------------------
    Standard Deviation: 0.9156
      Title: Alien Nation (1988)
    --------------------------------------------------
    Standard Deviation: 0.9157
      Title: Private Benjamin (1980)
    --------------------------------------------------
    Standard Deviation: 0.9157
      Title: Dangerous Liaisons (1988)
    --------------------------------------------------
    Standard Deviation: 0.9165
      Title: Gold Rush, The (1925)
    --------------------------------------------------
    Standard Deviation: 0.9173
      Title: Sleeping Beauty (1959)
    --------------------------------------------------
    Standard Deviation: 0.9175
      Title: Green Mile, The (1999)
    --------------------------------------------------
    Standard Deviation: 0.9178
      Title: Creepshow (1982)
    --------------------------------------------------
    Standard Deviation: 0.9181
      Title: Married to the Mob (1988)
    --------------------------------------------------
    Standard Deviation: 0.9182
      Title: Perfect World, A (1993)
    --------------------------------------------------
    Standard Deviation: 0.9183
      Title: Ransom (1996)
    --------------------------------------------------
    Standard Deviation: 0.9186
      Title: Executive Decision (1996)
    --------------------------------------------------
    Standard Deviation: 0.9187
      Title: Great Muppet Caper, The (1981)
    --------------------------------------------------
    Standard Deviation: 0.9187
      Title: Bottle Rocket (1996)
    --------------------------------------------------
    Standard Deviation: 0.9192
      Title: Breakdown (1997)
    --------------------------------------------------
    Standard Deviation: 0.9194
      Title: Mask of Zorro, The (1998)
    --------------------------------------------------
    Standard Deviation: 0.9194
      Title: Running Man, The (1987)
    --------------------------------------------------
    Standard Deviation: 0.9194
      Title: Peter Pan (1953)
    --------------------------------------------------
    Standard Deviation: 0.9195
      Title: Flatliners (1990)
    --------------------------------------------------
    Standard Deviation: 0.9196
      Title: Bull Durham (1988)
    --------------------------------------------------
    Standard Deviation: 0.9198
      Title: Age of Innocence, The (1993)
    --------------------------------------------------
    Standard Deviation: 0.9199
      Title: Lethal Weapon 2 (1989)
    --------------------------------------------------
    Standard Deviation: 0.9203
      Title: Birds, The (1963)
    --------------------------------------------------
    Standard Deviation: 0.9203
      Title: 28 Days (2000)
    --------------------------------------------------
    Standard Deviation: 0.9208
      Title: Grifters, The (1990)
    --------------------------------------------------
    Standard Deviation: 0.9213
      Title: Sid and Nancy (1986)
    --------------------------------------------------
    Standard Deviation: 0.9216
      Title: Unforgiven (1992)
    --------------------------------------------------
    Standard Deviation: 0.9216
      Title: 2 Days in the Valley (1996)
    --------------------------------------------------
    Standard Deviation: 0.9220
      Title: Brothers McMullen, The (1995)
    --------------------------------------------------
    Standard Deviation: 0.9223
      Title: Wyatt Earp (1994)
    --------------------------------------------------
    Standard Deviation: 0.9230
      Title: Dolores Claiborne (1994)
    --------------------------------------------------
    Standard Deviation: 0.9234
      Title: Pleasantville (1998)
    --------------------------------------------------
    Standard Deviation: 0.9235
      Title: Go (1999)
    --------------------------------------------------
    Standard Deviation: 0.9237
      Title: Superman (1978)
    --------------------------------------------------
    Standard Deviation: 0.9240
      Title: Life Is Beautiful (La Vita � bella) (1997)
    --------------------------------------------------
    Standard Deviation: 0.9243
      Title: Aliens (1986)
    --------------------------------------------------
    Standard Deviation: 0.9245
      Title: Shine (1996)
    --------------------------------------------------
    Standard Deviation: 0.9247
      Title: Fish Called Wanda, A (1988)
    --------------------------------------------------
    Standard Deviation: 0.9248
      Title: Disclosure (1994)
    --------------------------------------------------
    Standard Deviation: 0.9250
      Title: Charlotte's Web (1973)
    --------------------------------------------------
    Standard Deviation: 0.9269
      Title: Election (1999)
    --------------------------------------------------
    Standard Deviation: 0.9269
      Title: Hamlet (1996)
    --------------------------------------------------
    Standard Deviation: 0.9273
      Title: Ladyhawke (1985)
    --------------------------------------------------
    Standard Deviation: 0.9274
      Title: Star Wars: Episode VI - Return of the Jedi (1983)
    --------------------------------------------------
    Standard Deviation: 0.9278
      Title: Fatal Attraction (1987)
    --------------------------------------------------
    Standard Deviation: 0.9281
      Title: Hard-Boiled (Lashou shentan) (1992)
    --------------------------------------------------
    Standard Deviation: 0.9283
      Title: Payback (1999)
    --------------------------------------------------
    Standard Deviation: 0.9291
      Title: Prizzi's Honor (1985)
    --------------------------------------------------
    Standard Deviation: 0.9292
      Title: Groundhog Day (1993)
    --------------------------------------------------
    Standard Deviation: 0.9293
      Title: Ordinary People (1980)
    --------------------------------------------------
    Standard Deviation: 0.9293
      Title: Analyze This (1999)
    --------------------------------------------------
    Standard Deviation: 0.9294
      Title: Braveheart (1995)
    --------------------------------------------------
    Standard Deviation: 0.9296
      Title: Ref, The (1994)
    --------------------------------------------------
    Standard Deviation: 0.9298
      Title: Starman (1984)
    --------------------------------------------------
    Standard Deviation: 0.9300
      Title: Shaft (2000)
    --------------------------------------------------
    Standard Deviation: 0.9304
      Title: Emma (1996)
    --------------------------------------------------
    Standard Deviation: 0.9306
      Title: Deliverance (1972)
    --------------------------------------------------
    Standard Deviation: 0.9307
      Title: Frequency (2000)
    --------------------------------------------------
    Standard Deviation: 0.9308
      Title: Radio Days (1987)
    --------------------------------------------------
    Standard Deviation: 0.9309
      Title: Matrix, The (1999)
    --------------------------------------------------
    Standard Deviation: 0.9315
      Title: Siege, The (1998)
    --------------------------------------------------
    Standard Deviation: 0.9315
      Title: 7th Voyage of Sinbad, The (1958)
    --------------------------------------------------
    Standard Deviation: 0.9317
      Title: Men in Black (1997)
    --------------------------------------------------
    Standard Deviation: 0.9322
      Title: Outbreak (1995)
    --------------------------------------------------
    Standard Deviation: 0.9323
      Title: Doors, The (1991)
    --------------------------------------------------
    Standard Deviation: 0.9324
      Title: Little Women (1994)
    --------------------------------------------------
    Standard Deviation: 0.9326
      Title: Sliding Doors (1998)
    --------------------------------------------------
    Standard Deviation: 0.9327
      Title: Flight of the Navigator (1986)
    --------------------------------------------------
    Standard Deviation: 0.9331
      Title: Wild Bunch, The (1969)
    --------------------------------------------------
    Standard Deviation: 0.9332
      Title: Mariachi, El (1992)
    --------------------------------------------------
    Standard Deviation: 0.9333
      Title: Honey, I Shrunk the Kids (1989)
    --------------------------------------------------
    Standard Deviation: 0.9334
      Title: True Grit (1969)
    --------------------------------------------------
    Standard Deviation: 0.9339
      Title: Monty Python's Life of Brian (1979)
    --------------------------------------------------
    Standard Deviation: 0.9340
      Title: Time to Kill, A (1996)
    --------------------------------------------------
    Standard Deviation: 0.9340
      Title: My Dog Skip (1999)
    --------------------------------------------------
    Standard Deviation: 0.9341
      Title: Four Weddings and a Funeral (1994)
    --------------------------------------------------
    Standard Deviation: 0.9346
      Title: Heat (1995)
    --------------------------------------------------
    Standard Deviation: 0.9348
      Title: Peggy Sue Got Married (1986)
    --------------------------------------------------
    Standard Deviation: 0.9348
      Title: Gladiator (2000)
    --------------------------------------------------
    Standard Deviation: 0.9348
      Title: Get Shorty (1995)
    --------------------------------------------------
    Standard Deviation: 0.9351
      Title: Antz (1998)
    --------------------------------------------------
    Standard Deviation: 0.9351
      Title: Contender, The (2000)
    --------------------------------------------------
    Standard Deviation: 0.9352
      Title: Englishman Who Went Up a Hill, But Came Down a Mountain, The (1995)
    --------------------------------------------------
    Standard Deviation: 0.9357
      Title: Total Recall (1990)
    --------------------------------------------------
    Standard Deviation: 0.9360
      Title: Cyrano de Bergerac (1990)
    --------------------------------------------------
    Standard Deviation: 0.9362
      Title: Agnes of God (1985)
    --------------------------------------------------
    Standard Deviation: 0.9363
      Title: Forever Young (1992)
    --------------------------------------------------
    Standard Deviation: 0.9364
      Title: Metropolis (1926)
    --------------------------------------------------
    Standard Deviation: 0.9372
      Title: While You Were Sleeping (1995)
    --------------------------------------------------
    Standard Deviation: 0.9382
      Title: White Men Can't Jump (1992)
    --------------------------------------------------
    Standard Deviation: 0.9384
      Title: Out of Sight (1998)
    --------------------------------------------------
    Standard Deviation: 0.9385
      Title: Air America (1990)
    --------------------------------------------------
    Standard Deviation: 0.9387
      Title: True Lies (1994)
    --------------------------------------------------
    Standard Deviation: 0.9387
      Title: Weird Science (1985)
    --------------------------------------------------
    Standard Deviation: 0.9388
      Title: Waking Ned Devine (1998)
    --------------------------------------------------
    Standard Deviation: 0.9390
      Title: Absent Minded Professor, The (1961)
    --------------------------------------------------
    Standard Deviation: 0.9391
      Title: Grapes of Wrath, The (1940)
    --------------------------------------------------
    Standard Deviation: 0.9392
      Title: Seven (Se7en) (1995)
    --------------------------------------------------
    Standard Deviation: 0.9393
      Title: Miracle on 34th Street (1947)
    --------------------------------------------------
    Standard Deviation: 0.9394
      Title: Spanish Prisoner, The (1997)
    --------------------------------------------------
    Standard Deviation: 0.9395
      Title: Tin Cup (1996)
    --------------------------------------------------
    Standard Deviation: 0.9395
      Title: American Gigolo (1980)
    --------------------------------------------------
    Standard Deviation: 0.9396
      Title: Sleepy Hollow (1999)
    --------------------------------------------------
    Standard Deviation: 0.9398
      Title: Simple Plan, A (1998)
    --------------------------------------------------
    Standard Deviation: 0.9399
      Title: Iron Giant, The (1999)
    --------------------------------------------------
    Standard Deviation: 0.9399
      Title: Pump Up the Volume (1990)
    --------------------------------------------------
    Standard Deviation: 0.9403
      Title: Shakespeare in Love (1998)
    --------------------------------------------------
    Standard Deviation: 0.9409
      Title: Wayne's World (1992)
    --------------------------------------------------
    Standard Deviation: 0.9411
      Title: River Runs Through It, A (1992)
    --------------------------------------------------
    Standard Deviation: 0.9412
      Title: Cocoon: The Return (1988)
    --------------------------------------------------
    Standard Deviation: 0.9413
      Title: U-571 (2000)
    --------------------------------------------------
    Standard Deviation: 0.9414
      Title: Air Force One (1997)
    --------------------------------------------------
    Standard Deviation: 0.9415
      Title: Rob Roy (1995)
    --------------------------------------------------
    Standard Deviation: 0.9416
      Title: Fast Times at Ridgemont High (1982)
    --------------------------------------------------
    Standard Deviation: 0.9416
      Title: Ghost in the Shell (Kokaku kidotai) (1995)
    --------------------------------------------------
    Standard Deviation: 0.9417
      Title: Karate Kid III, The (1989)
    --------------------------------------------------
    Standard Deviation: 0.9419
      Title: Peacemaker, The (1997)
    --------------------------------------------------
    Standard Deviation: 0.9420
      Title: Bird on a Wire (1990)
    --------------------------------------------------
    Standard Deviation: 0.9427
      Title: Shadowlands (1993)
    --------------------------------------------------
    Standard Deviation: 0.9428
      Title: Poltergeist (1982)
    --------------------------------------------------
    Standard Deviation: 0.9430
      Title: About Last Night... (1986)
    --------------------------------------------------
    Standard Deviation: 0.9434
      Title: Thomas Crown Affair, The (1999)
    --------------------------------------------------
    Standard Deviation: 0.9435
      Title: South Pacific (1958)
    --------------------------------------------------
    Standard Deviation: 0.9436
      Title: Ruthless People (1986)
    --------------------------------------------------
    Standard Deviation: 0.9436
      Title: Rising Sun (1993)
    --------------------------------------------------
    Standard Deviation: 0.9436
      Title: Secret of Roan Inish, The (1994)
    --------------------------------------------------
    Standard Deviation: 0.9437
      Title: Deer Hunter, The (1978)
    --------------------------------------------------
    Standard Deviation: 0.9441
      Title: Shining, The (1980)
    --------------------------------------------------
    Standard Deviation: 0.9442
      Title: Immortal Beloved (1994)
    --------------------------------------------------
    Standard Deviation: 0.9444
      Title: Real Genius (1985)
    --------------------------------------------------
    Standard Deviation: 0.9449
      Title: Jewel of the Nile, The (1985)
    --------------------------------------------------
    Standard Deviation: 0.9452
      Title: Mumford (1999)
    --------------------------------------------------
    Standard Deviation: 0.9456
      Title: Jaws (1975)
    --------------------------------------------------
    Standard Deviation: 0.9456
      Title: Reality Bites (1994)
    --------------------------------------------------
    Standard Deviation: 0.9464
      Title: Die Hard 2 (1990)
    --------------------------------------------------
    Standard Deviation: 0.9466
      Title: 2010 (1984)
    --------------------------------------------------
    Standard Deviation: 0.9470
      Title: Sleepers (1996)
    --------------------------------------------------
    Standard Deviation: 0.9475
      Title: E.T. the Extra-Terrestrial (1982)
    --------------------------------------------------
    Standard Deviation: 0.9479
      Title: Muppet Movie, The (1979)
    --------------------------------------------------
    Standard Deviation: 0.9480
      Title: Bound (1996)
    --------------------------------------------------
    Standard Deviation: 0.9481
      Title: Abyss, The (1989)
    --------------------------------------------------
    Standard Deviation: 0.9482
      Title: Logan's Run (1976)
    --------------------------------------------------
    Standard Deviation: 0.9485
      Title: Princess Mononoke, The (Mononoke Hime) (1997)
    --------------------------------------------------
    Standard Deviation: 0.9485
      Title: Pinocchio (1940)
    --------------------------------------------------
    Standard Deviation: 0.9487
      Title: Vacation (1983)
    --------------------------------------------------
    Standard Deviation: 0.9488
      Title: High Fidelity (2000)
    --------------------------------------------------
    Standard Deviation: 0.9488
      Title: Hurricane, The (1999)
    --------------------------------------------------
    Standard Deviation: 0.9492
      Title: Rumble in the Bronx (1995)
    --------------------------------------------------
    Standard Deviation: 0.9496
      Title: Fargo (1996)
    --------------------------------------------------
    Standard Deviation: 0.9497
      Title: As Good As It Gets (1997)
    --------------------------------------------------
    Standard Deviation: 0.9498
      Title: Mickey Blue Eyes (1999)
    --------------------------------------------------
    Standard Deviation: 0.9500
      Title: Bullets Over Broadway (1994)
    --------------------------------------------------
    Standard Deviation: 0.9503
      Title: Big Chill, The (1983)
    --------------------------------------------------
    Standard Deviation: 0.9503
      Title: Joy Luck Club, The (1993)
    --------------------------------------------------
    Standard Deviation: 0.9503
      Title: Star Trek: First Contact (1996)
    --------------------------------------------------
    Standard Deviation: 0.9507
      Title: Blazing Saddles (1974)
    --------------------------------------------------
    Standard Deviation: 0.9508
      Title: Swamp Thing (1982)
    --------------------------------------------------
    Standard Deviation: 0.9509
      Title: Smoke Signals (1998)
    --------------------------------------------------
    Standard Deviation: 0.9510
      Title: Gods and Monsters (1998)
    --------------------------------------------------
    Standard Deviation: 0.9510
      Title: Full Monty, The (1997)
    --------------------------------------------------
    Standard Deviation: 0.9510
      Title: Bedknobs and Broomsticks (1971)
    --------------------------------------------------
    Standard Deviation: 0.9512
      Title: Shanghai Noon (2000)
    --------------------------------------------------
    Standard Deviation: 0.9516
      Title: Five Easy Pieces (1970)
    --------------------------------------------------
    Standard Deviation: 0.9517
      Title: Father of the Bride (1950)
    --------------------------------------------------
    Standard Deviation: 0.9523
      Title: Everyone Says I Love You (1996)
    --------------------------------------------------
    Standard Deviation: 0.9523
      Title: White Christmas (1954)
    --------------------------------------------------
    Standard Deviation: 0.9525
      Title: Little Voice (1998)
    --------------------------------------------------
    Standard Deviation: 0.9528
      Title: Snow White and the Seven Dwarfs (1937)
    --------------------------------------------------
    Standard Deviation: 0.9531
      Title: Ever After: A Cinderella Story (1998)
    --------------------------------------------------
    Standard Deviation: 0.9532
      Title: Remains of the Day, The (1993)
    --------------------------------------------------
    Standard Deviation: 0.9533
      Title: Chicken Run (2000)
    --------------------------------------------------
    Standard Deviation: 0.9536
      Title: Jaws 2 (1978)
    --------------------------------------------------
    Standard Deviation: 0.9541
      Title: Bob Roberts (1992)
    --------------------------------------------------
    Standard Deviation: 0.9542
      Title: Blues Brothers, The (1980)
    --------------------------------------------------
    Standard Deviation: 0.9545
      Title: Mystery, Alaska (1999)
    --------------------------------------------------
    Standard Deviation: 0.9548
      Title: Birdcage, The (1996)
    --------------------------------------------------
    Standard Deviation: 0.9549
      Title: Blast from the Past (1999)
    --------------------------------------------------
    Standard Deviation: 0.9553
      Title: Red Violin, The (Le Violon rouge) (1998)
    --------------------------------------------------
    Standard Deviation: 0.9554
      Title: Battlefield Earth (2000)
    --------------------------------------------------
    Standard Deviation: 0.9555
      Title: Bringing Up Baby (1938)
    --------------------------------------------------
    Standard Deviation: 0.9555
      Title: Conspiracy Theory (1997)
    --------------------------------------------------
    Standard Deviation: 0.9559
      Title: Aladdin (1992)
    --------------------------------------------------
    Standard Deviation: 0.9560
      Title: Maverick (1994)
    --------------------------------------------------
    Standard Deviation: 0.9561
      Title: Don Juan DeMarco (1995)
    --------------------------------------------------
    Standard Deviation: 0.9562
      Title: Kiss the Girls (1997)
    --------------------------------------------------
    Standard Deviation: 0.9562
      Title: Bone Collector, The (1999)
    --------------------------------------------------
    Standard Deviation: 0.9563
      Title: City Slickers II: The Legend of Curly's Gold (1994)
    --------------------------------------------------
    Standard Deviation: 0.9564
      Title: Heavenly Creatures (1994)
    --------------------------------------------------
    Standard Deviation: 0.9565
      Title: Sex, Lies, and Videotape (1989)
    --------------------------------------------------
    Standard Deviation: 0.9565
      Title: Ideal Husband, An (1999)
    --------------------------------------------------
    Standard Deviation: 0.9567
      Title: Galaxy Quest (1999)
    --------------------------------------------------
    Standard Deviation: 0.9569
      Title: Old Yeller (1957)
    --------------------------------------------------
    Standard Deviation: 0.9573
      Title: Robin Hood (1973)
    --------------------------------------------------
    Standard Deviation: 0.9574
      Title: Mimic (1997)
    --------------------------------------------------
    Standard Deviation: 0.9576
      Title: Devil's Own, The (1997)
    --------------------------------------------------
    Standard Deviation: 0.9578
      Title: Amistad (1997)
    --------------------------------------------------
    Standard Deviation: 0.9587
      Title: Gremlins (1984)
    --------------------------------------------------
    Standard Deviation: 0.9590
      Title: Fox and the Hound, The (1981)
    --------------------------------------------------
    Standard Deviation: 0.9593
      Title: Who's Afraid of Virginia Woolf? (1966)
    --------------------------------------------------
    Standard Deviation: 0.9597
      Title: Tin Men (1987)
    --------------------------------------------------
    Standard Deviation: 0.9599
      Title: Sleepless in Seattle (1993)
    --------------------------------------------------
    Standard Deviation: 0.9602
      Title: Breakfast at Tiffany's (1961)
    --------------------------------------------------
    Standard Deviation: 0.9609
      Title: Basic Instinct (1992)
    --------------------------------------------------
    Standard Deviation: 0.9615
      Title: Pelican Brief, The (1993)
    --------------------------------------------------
    Standard Deviation: 0.9616
      Title: Doctor Zhivago (1965)
    --------------------------------------------------
    Standard Deviation: 0.9618
      Title: St. Elmo's Fire (1985)
    --------------------------------------------------
    Standard Deviation: 0.9621
      Title: That Thing You Do! (1996)
    --------------------------------------------------
    Standard Deviation: 0.9622
      Title: Secret Garden, The (1993)
    --------------------------------------------------
    Standard Deviation: 0.9623
      Title: Secret of NIMH, The (1982)
    --------------------------------------------------
    Standard Deviation: 0.9624
      Title: Rock, The (1996)
    --------------------------------------------------
    Standard Deviation: 0.9624
      Title: Star Trek: The Wrath of Khan (1982)
    --------------------------------------------------
    Standard Deviation: 0.9626
      Title: Swingers (1996)
    --------------------------------------------------
    Standard Deviation: 0.9626
      Title: Arrival, The (1996)
    --------------------------------------------------
    Standard Deviation: 0.9627
      Title: Scent of a Woman (1992)
    --------------------------------------------------
    Standard Deviation: 0.9628
      Title: Seven Years in Tibet (1997)
    --------------------------------------------------
    Standard Deviation: 0.9629
      Title: Dead Men Don't Wear Plaid (1982)
    --------------------------------------------------
    Standard Deviation: 0.9630
      Title: Dumbo (1941)
    --------------------------------------------------
    Standard Deviation: 0.9631
      Title: Rocky (1976)
    --------------------------------------------------
    Standard Deviation: 0.9632
      Title: Help! (1965)
    --------------------------------------------------
    Standard Deviation: 0.9633
      Title: Whole Nine Yards, The (2000)
    --------------------------------------------------
    Standard Deviation: 0.9635
      Title: This Is Spinal Tap (1984)
    --------------------------------------------------
    Standard Deviation: 0.9636
      Title: Clueless (1995)
    --------------------------------------------------
    Standard Deviation: 0.9636
      Title: Space Cowboys (2000)
    --------------------------------------------------
    Standard Deviation: 0.9639
      Title: Stepford Wives, The (1975)
    --------------------------------------------------
    Standard Deviation: 0.9639
      Title: Karate Kid, Part II, The (1986)
    --------------------------------------------------
    Standard Deviation: 0.9641
      Title: Twelve Monkeys (1995)
    --------------------------------------------------
    Standard Deviation: 0.9644
      Title: U.S. Marshalls (1998)
    --------------------------------------------------
    Standard Deviation: 0.9647
      Title: Lion King, The (1994)
    --------------------------------------------------
    Standard Deviation: 0.9648
      Title: Who Framed Roger Rabbit? (1988)
    --------------------------------------------------
    Standard Deviation: 0.9648
      Title: Escape from New York (1981)
    --------------------------------------------------
    Standard Deviation: 0.9648
      Title: Field of Dreams (1989)
    --------------------------------------------------
    Standard Deviation: 0.9649
      Title: True Romance (1993)
    --------------------------------------------------
    Standard Deviation: 0.9650
      Title: Speed (1994)
    --------------------------------------------------
    Standard Deviation: 0.9653
      Title: Nineteen Eighty-Four (1984)
    --------------------------------------------------
    Standard Deviation: 0.9655
      Title: Last of the Mohicans, The (1992)
    --------------------------------------------------
    Standard Deviation: 0.9656
      Title: Thelma & Louise (1991)
    --------------------------------------------------
    Standard Deviation: 0.9658
      Title: Star Trek: Generations (1994)
    --------------------------------------------------
    Standard Deviation: 0.9658
      Title: Howards End (1992)
    --------------------------------------------------
    Standard Deviation: 0.9662
      Title: Superman III (1983)
    --------------------------------------------------
    Standard Deviation: 0.9668
      Title: Cool Runnings (1993)
    --------------------------------------------------
    Standard Deviation: 0.9669
      Title: Opposite of Sex, The (1998)
    --------------------------------------------------
    Standard Deviation: 0.9670
      Title: On Golden Pond (1981)
    --------------------------------------------------
    Standard Deviation: 0.9675
      Title: Heathers (1989)
    --------------------------------------------------
    Standard Deviation: 0.9677
      Title: Licence to Kill (1989)
    --------------------------------------------------
    Standard Deviation: 0.9682
      Title: Batman Returns (1992)
    --------------------------------------------------
    Standard Deviation: 0.9683
      Title: Beetlejuice (1988)
    --------------------------------------------------
    Standard Deviation: 0.9685
      Title: Annie Hall (1977)
    --------------------------------------------------
    Standard Deviation: 0.9688
      Title: Edward Scissorhands (1990)
    --------------------------------------------------
    Standard Deviation: 0.9691
      Title: Soylent Green (1973)
    --------------------------------------------------
    Standard Deviation: 0.9698
      Title: Jurassic Park (1993)
    --------------------------------------------------
    Standard Deviation: 0.9698
      Title: Excalibur (1981)
    --------------------------------------------------
    Standard Deviation: 0.9698
      Title: Flirting With Disaster (1996)
    --------------------------------------------------
    Standard Deviation: 0.9702
      Title: Crocodile Dundee II (1988)
    --------------------------------------------------
    Standard Deviation: 0.9703
      Title: Soapdish (1991)
    --------------------------------------------------
    Standard Deviation: 0.9705
      Title: Cinderella (1950)
    --------------------------------------------------
    Standard Deviation: 0.9712
      Title: Mad Max Beyond Thunderdome (1985)
    --------------------------------------------------
    Standard Deviation: 0.9714
      Title: My Best Friend's Wedding (1997)
    --------------------------------------------------
    Standard Deviation: 0.9714
      Title: Golden Child, The (1986)
    --------------------------------------------------
    Standard Deviation: 0.9718
      Title: Arachnophobia (1990)
    --------------------------------------------------
    Standard Deviation: 0.9718
      Title: French Kiss (1995)
    --------------------------------------------------
    Standard Deviation: 0.9719
      Title: Rudy (1993)
    --------------------------------------------------
    Standard Deviation: 0.9722
      Title: Ronin (1998)
    --------------------------------------------------
    Standard Deviation: 0.9723
      Title: Tender Mercies (1983)
    --------------------------------------------------
    Standard Deviation: 0.9729
      Title: World Is Not Enough, The (1999)
    --------------------------------------------------
    Standard Deviation: 0.9730
      Title: Towering Inferno, The (1974)
    --------------------------------------------------
    Standard Deviation: 0.9732
      Title: Fried Green Tomatoes (1991)
    --------------------------------------------------
    Standard Deviation: 0.9737
      Title: Alice in Wonderland (1951)
    --------------------------------------------------
    Standard Deviation: 0.9741
      Title: Addams Family, The (1991)
    --------------------------------------------------
    Standard Deviation: 0.9742
      Title: Private Parts (1997)
    --------------------------------------------------
    Standard Deviation: 0.9743
      Title: All About My Mother (Todo Sobre Mi Madre) (1999)
    --------------------------------------------------
    Standard Deviation: 0.9744
      Title: American Werewolf in London, An (1981)
    --------------------------------------------------
    Standard Deviation: 0.9745
      Title: Wayne's World 2 (1993)
    --------------------------------------------------
    Standard Deviation: 0.9747
      Title: Back to the Future Part II (1989)
    --------------------------------------------------
    Standard Deviation: 0.9750
      Title: Muppets Take Manhattan, The (1984)
    --------------------------------------------------
    Standard Deviation: 0.9751
      Title: Return to Me (2000)
    --------------------------------------------------
    Standard Deviation: 0.9751
      Title: American Beauty (1999)
    --------------------------------------------------
    Standard Deviation: 0.9754
      Title: Perfect Storm, The (2000)
    --------------------------------------------------
    Standard Deviation: 0.9756
      Title: Roger & Me (1989)
    --------------------------------------------------
    Standard Deviation: 0.9758
      Title: Mulan (1998)
    --------------------------------------------------
    Standard Deviation: 0.9764
      Title: Slums of Beverly Hills, The (1998)
    --------------------------------------------------
    Standard Deviation: 0.9768
      Title: Animal House (1978)
    --------------------------------------------------
    Standard Deviation: 0.9768
      Title: Rocketeer, The (1991)
    --------------------------------------------------
    Standard Deviation: 0.9771
      Title: Copycat (1995)
    --------------------------------------------------
    Standard Deviation: 0.9771
      Title: Mission: Impossible (1996)
    --------------------------------------------------
    Standard Deviation: 0.9773
      Title: Doctor Dolittle (1998)
    --------------------------------------------------
    Standard Deviation: 0.9775
      Title: Great Expectations (1998)
    --------------------------------------------------
    Standard Deviation: 0.9777
      Title: Body Snatchers (1993)
    --------------------------------------------------
    Standard Deviation: 0.9779
      Title: Footloose (1984)
    --------------------------------------------------
    Standard Deviation: 0.9781
      Title: Seventh Seal, The (Sjunde inseglet, Det) (1957)
    --------------------------------------------------
    Standard Deviation: 0.9784
      Title: Wedding Singer, The (1998)
    --------------------------------------------------
    Standard Deviation: 0.9784
      Title: Dragonheart (1996)
    --------------------------------------------------
    Standard Deviation: 0.9784
      Title: Harry and the Hendersons (1987)
    --------------------------------------------------
    Standard Deviation: 0.9785
      Title: Frankenstein (1931)
    --------------------------------------------------
    Standard Deviation: 0.9786
      Title: Office Space (1999)
    --------------------------------------------------
    Standard Deviation: 0.9793
      Title: Forbidden Planet (1956)
    --------------------------------------------------
    Standard Deviation: 0.9794
      Title: Being There (1979)
    --------------------------------------------------
    Standard Deviation: 0.9795
      Title: On Her Majesty's Secret Service (1969)
    --------------------------------------------------
    Standard Deviation: 0.9797
      Title: West Side Story (1961)
    --------------------------------------------------
    Standard Deviation: 0.9799
      Title: Kalifornia (1993)
    --------------------------------------------------
    Standard Deviation: 0.9799
      Title: Sabrina (1995)
    --------------------------------------------------
    Standard Deviation: 0.9800
      Title: Pulp Fiction (1994)
    --------------------------------------------------
    Standard Deviation: 0.9803
      Title: Hand That Rocks the Cradle, The (1992)
    --------------------------------------------------
    Standard Deviation: 0.9807
      Title: Girl, Interrupted (1999)
    --------------------------------------------------
    Standard Deviation: 0.9807
      Title: Lord of the Flies (1963)
    --------------------------------------------------
    Standard Deviation: 0.9817
      Title: Nurse Betty (2000)
    --------------------------------------------------
    Standard Deviation: 0.9819
      Title: Robocop 2 (1990)
    --------------------------------------------------
    Standard Deviation: 0.9821
      Title: 101 Dalmatians (1961)
    --------------------------------------------------
    Standard Deviation: 0.9828
      Title: Batman (1989)
    --------------------------------------------------
    Standard Deviation: 0.9828
      Title: Superman II (1980)
    --------------------------------------------------
    Standard Deviation: 0.9831
      Title: Lethal Weapon 3 (1992)
    --------------------------------------------------
    Standard Deviation: 0.9832
      Title: Jumanji (1995)
    --------------------------------------------------
    Standard Deviation: 0.9833
      Title: Invasion of the Body Snatchers (1956)
    --------------------------------------------------
    Standard Deviation: 0.9835
      Title: Predator (1987)
    --------------------------------------------------
    Standard Deviation: 0.9838
      Title: Airplane! (1980)
    --------------------------------------------------
    Standard Deviation: 0.9841
      Title: Grumpy Old Men (1993)
    --------------------------------------------------
    Standard Deviation: 0.9851
      Title: Christine (1983)
    --------------------------------------------------
    Standard Deviation: 0.9856
      Title: Supercop (1992)
    --------------------------------------------------
    Standard Deviation: 0.9863
      Title: Mrs. Doubtfire (1993)
    --------------------------------------------------
    Standard Deviation: 0.9863
      Title: Entrapment (1999)
    --------------------------------------------------
    Standard Deviation: 0.9874
      Title: Far and Away (1992)
    --------------------------------------------------
    Standard Deviation: 0.9874
      Title: American Tail, An (1986)
    --------------------------------------------------
    Standard Deviation: 0.9875
      Title: Raising Arizona (1987)
    --------------------------------------------------
    Standard Deviation: 0.9875
      Title: Ghostbusters II (1989)
    --------------------------------------------------
    Standard Deviation: 0.9876
      Title: Iron Eagle (1986)
    --------------------------------------------------
    Standard Deviation: 0.9876
      Title: Prince of Egypt, The (1998)
    --------------------------------------------------
    Standard Deviation: 0.9882
      Title: Short Cuts (1993)
    --------------------------------------------------
    Standard Deviation: 0.9883
      Title: Freejack (1992)
    --------------------------------------------------
    Standard Deviation: 0.9884
      Title: Anastasia (1997)
    --------------------------------------------------
    Standard Deviation: 0.9887
      Title: Dark Crystal, The (1982)
    --------------------------------------------------
    Standard Deviation: 0.9889
      Title: Carrie (1976)
    --------------------------------------------------
    Standard Deviation: 0.9890
      Title: Never Been Kissed (1999)
    --------------------------------------------------
    Standard Deviation: 0.9890
      Title: Delicatessen (1991)
    --------------------------------------------------
    Standard Deviation: 0.9892
      Title: Easy Rider (1969)
    --------------------------------------------------
    Standard Deviation: 0.9895
      Title: Sophie's Choice (1982)
    --------------------------------------------------
    Standard Deviation: 0.9896
      Title: Do the Right Thing (1989)
    --------------------------------------------------
    Standard Deviation: 0.9898
      Title: Rocky II (1979)
    --------------------------------------------------
    Standard Deviation: 0.9898
      Title: 10 Things I Hate About You (1999)
    --------------------------------------------------
    Standard Deviation: 0.9900
      Title: Menace II Society (1993)
    --------------------------------------------------
    Standard Deviation: 0.9903
      Title: American in Paris, An (1951)
    --------------------------------------------------
    Standard Deviation: 0.9904
      Title: Wag the Dog (1997)
    --------------------------------------------------
    Standard Deviation: 0.9905
      Title: Dick Tracy (1990)
    --------------------------------------------------
    Standard Deviation: 0.9906
      Title: Westworld (1973)
    --------------------------------------------------
    Standard Deviation: 0.9906
      Title: Fly, The (1986)
    --------------------------------------------------
    Standard Deviation: 0.9910
      Title: Jackal, The (1997)
    --------------------------------------------------
    Standard Deviation: 0.9911
      Title: Reservoir Dogs (1992)
    --------------------------------------------------
    Standard Deviation: 0.9912
      Title: JFK (1991)
    --------------------------------------------------
    Standard Deviation: 0.9913
      Title: She's All That (1999)
    --------------------------------------------------
    Standard Deviation: 0.9913
      Title: General's Daughter, The (1999)
    --------------------------------------------------
    Standard Deviation: 0.9914
      Title: Pushing Tin (1999)
    --------------------------------------------------
    Standard Deviation: 0.9914
      Title: Remember the Titans (2000)
    --------------------------------------------------
    Standard Deviation: 0.9914
      Title: Phenomenon (1996)
    --------------------------------------------------
    Standard Deviation: 0.9918
      Title: Bowfinger (1999)
    --------------------------------------------------
    Standard Deviation: 0.9920
      Title: Shane (1953)
    --------------------------------------------------
    Standard Deviation: 0.9922
      Title: Akira (1988)
    --------------------------------------------------
    Standard Deviation: 0.9923
      Title: Moonraker (1979)
    --------------------------------------------------
    Standard Deviation: 0.9924
      Title: Mercury Rising (1998)
    --------------------------------------------------
    Standard Deviation: 0.9928
      Title: Mad Max (1979)
    --------------------------------------------------
    Standard Deviation: 0.9930
      Title: Striptease (1996)
    --------------------------------------------------
    Standard Deviation: 0.9933
      Title: Man with Two Brains, The (1983)
    --------------------------------------------------
    Standard Deviation: 0.9935
      Title: Desperado (1995)
    --------------------------------------------------
    Standard Deviation: 0.9936
      Title: Robocop (1987)
    --------------------------------------------------
    Standard Deviation: 0.9937
      Title: Quick and the Dead, The (1995)
    --------------------------------------------------
    Standard Deviation: 0.9938
      Title: Superman IV: The Quest for Peace (1987)
    --------------------------------------------------
    Standard Deviation: 0.9941
      Title: Dick (1999)
    --------------------------------------------------
    Standard Deviation: 0.9948
      Title: Three Musketeers, The (1993)
    --------------------------------------------------
    Standard Deviation: 0.9949
      Title: Highlander (1986)
    --------------------------------------------------
    Standard Deviation: 0.9956
      Title: Three Kings (1999)
    --------------------------------------------------
    Standard Deviation: 0.9957
      Title: Notting Hill (1999)
    --------------------------------------------------
    Standard Deviation: 0.9963
      Title: Muriel's Wedding (1994)
    --------------------------------------------------
    Standard Deviation: 0.9963
      Title: Grand Canyon (1991)
    --------------------------------------------------
    Standard Deviation: 0.9968
      Title: Time Bandits (1981)
    --------------------------------------------------
    Standard Deviation: 0.9968
      Title: City of Lost Children, The (1995)
    --------------------------------------------------
    Standard Deviation: 0.9968
      Title: Gattaca (1997)
    --------------------------------------------------
    Standard Deviation: 0.9969
      Title: Indian in the Cupboard, The (1995)
    --------------------------------------------------
    Standard Deviation: 0.9971
      Title: Local Hero (1983)
    --------------------------------------------------
    Standard Deviation: 0.9975
      Title: Murphy's Romance (1985)
    --------------------------------------------------
    Standard Deviation: 0.9977
      Title: Moonstruck (1987)
    --------------------------------------------------
    Standard Deviation: 0.9981
      Title: Six Days Seven Nights (1998)
    --------------------------------------------------
    Standard Deviation: 0.9985
      Title: Jackie Chan's First Strike (1996)
    --------------------------------------------------
    Standard Deviation: 0.9986
      Title: Net, The (1995)
    --------------------------------------------------
    Standard Deviation: 0.9988
      Title: Strictly Ballroom (1992)
    --------------------------------------------------
    Standard Deviation: 0.9990
      Title: Species (1995)
    --------------------------------------------------
    Standard Deviation: 0.9990
      Title: Virgin Suicides, The (1999)
    --------------------------------------------------
    Standard Deviation: 0.9991
      Title: Room with a View, A (1986)
    --------------------------------------------------
    Standard Deviation: 0.9996
      Title: Lock, Stock & Two Smoking Barrels (1998)
    --------------------------------------------------
    Standard Deviation: 1.0003
      Title: Limey, The (1999)
    --------------------------------------------------
    Standard Deviation: 1.0007
      Title: Medicine Man (1992)
    --------------------------------------------------
    Standard Deviation: 1.0007
      Title: Night of the Comet (1984)
    --------------------------------------------------
    Standard Deviation: 1.0010
      Title: Like Water for Chocolate (Como agua para chocolate) (1992)
    --------------------------------------------------
    Standard Deviation: 1.0012
      Title: Anna and the King (1999)
    --------------------------------------------------
    Standard Deviation: 1.0012
      Title: Indiana Jones and the Temple of Doom (1984)
    --------------------------------------------------
    Standard Deviation: 1.0017
      Title: Stargate (1994)
    --------------------------------------------------
    Standard Deviation: 1.0018
      Title: Adventures in Babysitting (1987)
    --------------------------------------------------
    Standard Deviation: 1.0022
      Title: Willow (1988)
    --------------------------------------------------
    Standard Deviation: 1.0024
      Title: Meatballs (1979)
    --------------------------------------------------
    Standard Deviation: 1.0025
      Title: Smilla's Sense of Snow (1997)
    --------------------------------------------------
    Standard Deviation: 1.0032
      Title: Bambi (1942)
    --------------------------------------------------
    Standard Deviation: 1.0033
      Title: Thing, The (1982)
    --------------------------------------------------
    Standard Deviation: 1.0036
      Title: Fright Night (1985)
    --------------------------------------------------
    Standard Deviation: 1.0036
      Title: To Die For (1995)
    --------------------------------------------------
    Standard Deviation: 1.0036
      Title: Buffy the Vampire Slayer (1992)
    --------------------------------------------------
    Standard Deviation: 1.0037
      Title: Fly II, The (1989)
    --------------------------------------------------
    Standard Deviation: 1.0040
      Title: Victor/Victoria (1982)
    --------------------------------------------------
    Standard Deviation: 1.0048
      Title: Auntie Mame (1958)
    --------------------------------------------------
    Standard Deviation: 1.0054
      Title: Crying Game, The (1992)
    --------------------------------------------------
    Standard Deviation: 1.0059
      Title: Arlington Road (1999)
    --------------------------------------------------
    Standard Deviation: 1.0062
      Title: Money Pit, The (1986)
    --------------------------------------------------
    Standard Deviation: 1.0065
      Title: Romeo Must Die (2000)
    --------------------------------------------------
    Standard Deviation: 1.0067
      Title: Die Hard: With a Vengeance (1995)
    --------------------------------------------------
    Standard Deviation: 1.0072
      Title: Arthur (1981)
    --------------------------------------------------
    Standard Deviation: 1.0074
      Title: Hard Day's Night, A (1964)
    --------------------------------------------------
    Standard Deviation: 1.0083
      Title: Contact (1997)
    --------------------------------------------------
    Standard Deviation: 1.0086
      Title: In & Out (1997)
    --------------------------------------------------
    Standard Deviation: 1.0092
      Title: Firestarter (1984)
    --------------------------------------------------
    Standard Deviation: 1.0093
      Title: Forget Paris (1995)
    --------------------------------------------------
    Standard Deviation: 1.0096
      Title: All That Jazz (1979)
    --------------------------------------------------
    Standard Deviation: 1.0097
      Title: Mary Poppins (1964)
    --------------------------------------------------
    Standard Deviation: 1.0098
      Title: Requiem for a Dream (2000)
    --------------------------------------------------
    Standard Deviation: 1.0098
      Title: Jerk, The (1979)
    --------------------------------------------------
    Standard Deviation: 1.0099
      Title: Adventures of Priscilla, Queen of the Desert, The (1994)
    --------------------------------------------------
    Standard Deviation: 1.0100
      Title: Midsummer Night's Dream, A (1999)
    --------------------------------------------------
    Standard Deviation: 1.0102
      Title: Star Trek IV: The Voyage Home (1986)
    --------------------------------------------------
    Standard Deviation: 1.0107
      Title: Forrest Gump (1994)
    --------------------------------------------------
    Standard Deviation: 1.0110
      Title: Small Time Crooks (2000)
    --------------------------------------------------
    Standard Deviation: 1.0112
      Title: Congo (1995)
    --------------------------------------------------
    Standard Deviation: 1.0114
      Title: Red Dawn (1984)
    --------------------------------------------------
    Standard Deviation: 1.0120
      Title: Clerks (1994)
    --------------------------------------------------
    Standard Deviation: 1.0128
      Title: Ed Wood (1994)
    --------------------------------------------------
    Standard Deviation: 1.0129
      Title: Flintstones, The (1994)
    --------------------------------------------------
    Standard Deviation: 1.0130
      Title: Star Trek: Insurrection (1998)
    --------------------------------------------------
    Standard Deviation: 1.0132
      Title: Defending Your Life (1991)
    --------------------------------------------------
    Standard Deviation: 1.0132
      Title: Chasing Amy (1997)
    --------------------------------------------------
    Standard Deviation: 1.0133
      Title: Casper (1995)
    --------------------------------------------------
    Standard Deviation: 1.0139
      Title: Bachelor Party (1984)
    --------------------------------------------------
    Standard Deviation: 1.0140
      Title: Addams Family Values (1993)
    --------------------------------------------------
    Standard Deviation: 1.0142
      Title: Meet the Parents (2000)
    --------------------------------------------------
    Standard Deviation: 1.0150
      Title: Mr. Holland's Opus (1995)
    --------------------------------------------------
    Standard Deviation: 1.0153
      Title: Fletch (1985)
    --------------------------------------------------
    Standard Deviation: 1.0153
      Title: Labyrinth (1986)
    --------------------------------------------------
    Standard Deviation: 1.0156
      Title: Timecop (1994)
    --------------------------------------------------
    Standard Deviation: 1.0157
      Title: Little Mermaid, The (1989)
    --------------------------------------------------
    Standard Deviation: 1.0160
      Title: Snake Eyes (1998)
    --------------------------------------------------
    Standard Deviation: 1.0161
      Title: Eraser (1996)
    --------------------------------------------------
    Standard Deviation: 1.0162
      Title: Willy Wonka and the Chocolate Factory (1971)
    --------------------------------------------------
    Standard Deviation: 1.0162
      Title: Dark City (1998)
    --------------------------------------------------
    Standard Deviation: 1.0165
      Title: Space Jam (1996)
    --------------------------------------------------
    Standard Deviation: 1.0168
      Title: King Kong (1933)
    --------------------------------------------------
    Standard Deviation: 1.0174
      Title: Shampoo (1975)
    --------------------------------------------------
    Standard Deviation: 1.0174
      Title: Young Guns (1988)
    --------------------------------------------------
    Standard Deviation: 1.0178
      Title: Thirteenth Floor, The (1999)
    --------------------------------------------------
    Standard Deviation: 1.0183
      Title: Dinosaur (2000)
    --------------------------------------------------
    Standard Deviation: 1.0183
      Title: Mad Max 2 (a.k.a. The Road Warrior) (1981)
    --------------------------------------------------
    Standard Deviation: 1.0185
      Title: Being John Malkovich (1999)
    --------------------------------------------------
    Standard Deviation: 1.0192
      Title: Boys Don't Cry (1999)
    --------------------------------------------------
    Standard Deviation: 1.0200
      Title: Dances with Wolves (1990)
    --------------------------------------------------
    Standard Deviation: 1.0203
      Title: Cliffhanger (1993)
    --------------------------------------------------
    Standard Deviation: 1.0206
      Title: Romy and Michele's High School Reunion (1997)
    --------------------------------------------------
    Standard Deviation: 1.0211
      Title: Hunchback of Notre Dame, The (1996)
    --------------------------------------------------
    Standard Deviation: 1.0211
      Title: Man on the Moon (1999)
    --------------------------------------------------
    Standard Deviation: 1.0213
      Title: Craft, The (1996)
    --------------------------------------------------
    Standard Deviation: 1.0216
      Title: Trainspotting (1996)
    --------------------------------------------------
    Standard Deviation: 1.0219
      Title: Honey, I Blew Up the Kid (1992)
    --------------------------------------------------
    Standard Deviation: 1.0228
      Title: Gods Must Be Crazy, The (1980)
    --------------------------------------------------
    Standard Deviation: 1.0232
      Title: James and the Giant Peach (1996)
    --------------------------------------------------
    Standard Deviation: 1.0234
      Title: Planet of the Apes (1968)
    --------------------------------------------------
    Standard Deviation: 1.0234
      Title: Falling Down (1993)
    --------------------------------------------------
    Standard Deviation: 1.0242
      Title: Santa Clause, The (1994)
    --------------------------------------------------
    Standard Deviation: 1.0243
      Title: Big Trouble in Little China (1986)
    --------------------------------------------------
    Standard Deviation: 1.0247
      Title: Fisher King, The (1991)
    --------------------------------------------------
    Standard Deviation: 1.0251
      Title: Father of the Bride Part II (1995)
    --------------------------------------------------
    Standard Deviation: 1.0253
      Title: Back to School (1986)
    --------------------------------------------------
    Standard Deviation: 1.0257
      Title: Robin Hood: Prince of Thieves (1991)
    --------------------------------------------------
    Standard Deviation: 1.0260
      Title: Universal Soldier (1992)
    --------------------------------------------------
    Standard Deviation: 1.0261
      Title: Frighteners, The (1996)
    --------------------------------------------------
    Standard Deviation: 1.0262
      Title: Ice Storm, The (1997)
    --------------------------------------------------
    Standard Deviation: 1.0263
      Title: Guys and Dolls (1955)
    --------------------------------------------------
    Standard Deviation: 1.0263
      Title: Somewhere in Time (1980)
    --------------------------------------------------
    Standard Deviation: 1.0263
      Title: Michael (1996)
    --------------------------------------------------
    Standard Deviation: 1.0265
      Title: Back to the Future Part III (1990)
    --------------------------------------------------
    Standard Deviation: 1.0266
      Title: Dazed and Confused (1993)
    --------------------------------------------------
    Standard Deviation: 1.0273
      Title: Nashville (1975)
    --------------------------------------------------
    Standard Deviation: 1.0273
      Title: Mask, The (1994)
    --------------------------------------------------
    Standard Deviation: 1.0275
      Title: Predator 2 (1990)
    --------------------------------------------------
    Standard Deviation: 1.0276
      Title: Con Air (1997)
    --------------------------------------------------
    Standard Deviation: 1.0278
      Title: So I Married an Axe Murderer (1993)
    --------------------------------------------------
    Standard Deviation: 1.0278
      Title: Desperately Seeking Susan (1985)
    --------------------------------------------------
    Standard Deviation: 1.0278
      Title: Stuart Little (1999)
    --------------------------------------------------
    Standard Deviation: 1.0280
      Title: Death Becomes Her (1992)
    --------------------------------------------------
    Standard Deviation: 1.0288
      Title: What About Bob? (1991)
    --------------------------------------------------
    Standard Deviation: 1.0289
      Title: First Blood (1982)
    --------------------------------------------------
    Standard Deviation: 1.0289
      Title: Beauty and the Beast (1991)
    --------------------------------------------------
    Standard Deviation: 1.0290
      Title: Mis�rables, Les (1998)
    --------------------------------------------------
    Standard Deviation: 1.0294
      Title: Kentucky Fried Movie, The (1977)
    --------------------------------------------------
    Standard Deviation: 1.0295
      Title: Beverly Hills Cop III (1994)
    --------------------------------------------------
    Standard Deviation: 1.0295
      Title: Top Gun (1986)
    --------------------------------------------------
    Standard Deviation: 1.0300
      Title: Instinct (1999)
    --------------------------------------------------
    Standard Deviation: 1.0305
      Title: Corrina, Corrina (1994)
    --------------------------------------------------
    Standard Deviation: 1.0314
      Title: Parent Trap, The (1961)
    --------------------------------------------------
    Standard Deviation: 1.0325
      Title: Hudsucker Proxy, The (1994)
    --------------------------------------------------
    Standard Deviation: 1.0326
      Title: Judge Dredd (1995)
    --------------------------------------------------
    Standard Deviation: 1.0328
      Title: Aristocats, The (1970)
    --------------------------------------------------
    Standard Deviation: 1.0328
      Title: Under Siege (1992)
    --------------------------------------------------
    Standard Deviation: 1.0328
      Title: Naked Gun 2 1/2: The Smell of Fear, The (1991)
    --------------------------------------------------
    Standard Deviation: 1.0328
      Title: Wild Things (1998)
    --------------------------------------------------
    Standard Deviation: 1.0328
      Title: Tarzan (1999)
    --------------------------------------------------
    Standard Deviation: 1.0330
      Title: Muppet Christmas Carol, The (1992)
    --------------------------------------------------
    Standard Deviation: 1.0331
      Title: Black Hole, The (1979)
    --------------------------------------------------
    Standard Deviation: 1.0332
      Title: King Kong (1976)
    --------------------------------------------------
    Standard Deviation: 1.0336
      Title: Cradle Will Rock, The (1999)
    --------------------------------------------------
    Standard Deviation: 1.0339
      Title: Blue Lagoon, The (1980)
    --------------------------------------------------
    Standard Deviation: 1.0339
      Title: Replacement Killers, The (1998)
    --------------------------------------------------
    Standard Deviation: 1.0341
      Title: Interview with the Vampire (1994)
    --------------------------------------------------
    Standard Deviation: 1.0341
      Title: Tron (1982)
    --------------------------------------------------
    Standard Deviation: 1.0348
      Title: Glengarry Glen Ross (1992)
    --------------------------------------------------
    Standard Deviation: 1.0352
      Title: Them! (1954)
    --------------------------------------------------
    Standard Deviation: 1.0352
      Title: Scream (1996)
    --------------------------------------------------
    Standard Deviation: 1.0353
      Title: Deep Impact (1998)
    --------------------------------------------------
    Standard Deviation: 1.0355
      Title: 54 (1998)
    --------------------------------------------------
    Standard Deviation: 1.0356
      Title: Thomas Crown Affair, The (1968)
    --------------------------------------------------
    Standard Deviation: 1.0359
      Title: Bad Boys (1995)
    --------------------------------------------------
    Standard Deviation: 1.0366
      Title: Bodyguard, The (1992)
    --------------------------------------------------
    Standard Deviation: 1.0368
      Title: Fallen (1998)
    --------------------------------------------------
    Standard Deviation: 1.0370
      Title: Sister Act (1992)
    --------------------------------------------------
    Standard Deviation: 1.0372
      Title: Friday (1995)
    --------------------------------------------------
    Standard Deviation: 1.0372
      Title: Escape to Witch Mountain (1975)
    --------------------------------------------------
    Standard Deviation: 1.0373
      Title: Apostle, The (1997)
    --------------------------------------------------
    Standard Deviation: 1.0375
      Title: Runaway Bride (1999)
    --------------------------------------------------
    Standard Deviation: 1.0379
      Title: You've Got Mail (1998)
    --------------------------------------------------
    Standard Deviation: 1.0379
      Title: Days of Thunder (1990)
    --------------------------------------------------
    Standard Deviation: 1.0380
      Title: Babe (1995)
    --------------------------------------------------
    Standard Deviation: 1.0381
      Title: Deconstructing Harry (1997)
    --------------------------------------------------
    Standard Deviation: 1.0386
      Title: Mighty Ducks, The (1992)
    --------------------------------------------------
    Standard Deviation: 1.0388
      Title: Welcome to the Dollhouse (1995)
    --------------------------------------------------
    Standard Deviation: 1.0390
      Title: Encino Man (1992)
    --------------------------------------------------
    Standard Deviation: 1.0394
      Title: Anaconda (1997)
    --------------------------------------------------
    Standard Deviation: 1.0401
      Title: Chariots of Fire (1981)
    --------------------------------------------------
    Standard Deviation: 1.0402
      Title: Broken Arrow (1996)
    --------------------------------------------------
    Standard Deviation: 1.0408
      Title: Faculty, The (1998)
    --------------------------------------------------
    Standard Deviation: 1.0410
      Title: Crumb (1994)
    --------------------------------------------------
    Standard Deviation: 1.0420
      Title: Airplane II: The Sequel (1982)
    --------------------------------------------------
    Standard Deviation: 1.0421
      Title: Color Purple, The (1985)
    --------------------------------------------------
    Standard Deviation: 1.0425
      Title: 2001: A Space Odyssey (1968)
    --------------------------------------------------
    Standard Deviation: 1.0429
      Title: Demolition Man (1993)
    --------------------------------------------------
    Standard Deviation: 1.0429
      Title: Zero Effect (1998)
    --------------------------------------------------
    Standard Deviation: 1.0432
      Title: American Movie (1999)
    --------------------------------------------------
    Standard Deviation: 1.0441
      Title: Star Trek VI: The Undiscovered Country (1991)
    --------------------------------------------------
    Standard Deviation: 1.0441
      Title: Super Mario Bros. (1993)
    --------------------------------------------------
    Standard Deviation: 1.0442
      Title: Caddyshack (1980)
    --------------------------------------------------
    Standard Deviation: 1.0443
      Title: Avengers, The (1998)
    --------------------------------------------------
    Standard Deviation: 1.0445
      Title: Long Kiss Goodnight, The (1996)
    --------------------------------------------------
    Standard Deviation: 1.0447
      Title: Pretty Woman (1990)
    --------------------------------------------------
    Standard Deviation: 1.0450
      Title: Last Action Hero (1993)
    --------------------------------------------------
    Standard Deviation: 1.0464
      Title: Free Willy (1993)
    --------------------------------------------------
    Standard Deviation: 1.0466
      Title: Midnight in the Garden of Good and Evil (1997)
    --------------------------------------------------
    Standard Deviation: 1.0469
      Title: NeverEnding Story, The (1984)
    --------------------------------------------------
    Standard Deviation: 1.0469
      Title: Batman Forever (1995)
    --------------------------------------------------
    Standard Deviation: 1.0470
      Title: Tombstone (1993)
    --------------------------------------------------
    Standard Deviation: 1.0471
      Title: Ghost and the Darkness, The (1996)
    --------------------------------------------------
    Standard Deviation: 1.0473
      Title: Repo Man (1984)
    --------------------------------------------------
    Standard Deviation: 1.0483
      Title: Fly, The (1958)
    --------------------------------------------------
    Standard Deviation: 1.0493
      Title: Double Jeopardy (1999)
    --------------------------------------------------
    Standard Deviation: 1.0493
      Title: In the Company of Men (1997)
    --------------------------------------------------
    Standard Deviation: 1.0494
      Title: Inspector Gadget (1999)
    --------------------------------------------------
    Standard Deviation: 1.0496
      Title: Summer of Sam (1999)
    --------------------------------------------------
    Standard Deviation: 1.0498
      Title: Boogie Nights (1997)
    --------------------------------------------------
    Standard Deviation: 1.0499
      Title: Sommersby (1993)
    --------------------------------------------------
    Standard Deviation: 1.0500
      Title: Army of Darkness (1993)
    --------------------------------------------------
    Standard Deviation: 1.0501
      Title: Pete's Dragon (1977)
    --------------------------------------------------
    Standard Deviation: 1.0503
      Title: Mortal Kombat (1995)
    --------------------------------------------------
    Standard Deviation: 1.0504
      Title: Little Shop of Horrors (1986)
    --------------------------------------------------
    Standard Deviation: 1.0506
      Title: Flashdance (1983)
    --------------------------------------------------
    Standard Deviation: 1.0507
      Title: Battle for the Planet of the Apes (1973)
    --------------------------------------------------
    Standard Deviation: 1.0509
      Title: Cat Ballou (1965)
    --------------------------------------------------
    Standard Deviation: 1.0509
      Title: Rambo: First Blood Part II (1985)
    --------------------------------------------------
    Standard Deviation: 1.0512
      Title: Ghost (1990)
    --------------------------------------------------
    Standard Deviation: 1.0516
      Title: Godfather: Part III, The (1990)
    --------------------------------------------------
    Standard Deviation: 1.0520
      Title: Devil's Advocate, The (1997)
    --------------------------------------------------
    Standard Deviation: 1.0527
      Title: Island of Dr. Moreau, The (1996)
    --------------------------------------------------
    Standard Deviation: 1.0529
      Title: Escape from the Planet of the Apes (1971)
    --------------------------------------------------
    Standard Deviation: 1.0530
      Title: Naked Gun 33 1/3: The Final Insult (1994)
    --------------------------------------------------
    Standard Deviation: 1.0533
      Title: Strange Days (1995)
    --------------------------------------------------
    Standard Deviation: 1.0533
      Title: Rocky III (1982)
    --------------------------------------------------
    Standard Deviation: 1.0538
      Title: Cabaret (1972)
    --------------------------------------------------
    Standard Deviation: 1.0540
      Title: Gone with the Wind (1939)
    --------------------------------------------------
    Standard Deviation: 1.0554
      Title: Pecker (1998)
    --------------------------------------------------
    Standard Deviation: 1.0556
      Title: Brazil (1985)
    --------------------------------------------------
    Standard Deviation: 1.0573
      Title: Beneath the Planet of the Apes (1970)
    --------------------------------------------------
    Standard Deviation: 1.0578
      Title: Coneheads (1993)
    --------------------------------------------------
    Standard Deviation: 1.0578
      Title: Rosemary's Baby (1968)
    --------------------------------------------------
    Standard Deviation: 1.0583
      Title: Sphere (1998)
    --------------------------------------------------
    Standard Deviation: 1.0590
      Title: Steel Magnolias (1989)
    --------------------------------------------------
    Standard Deviation: 1.0595
      Title: Omen, The (1976)
    --------------------------------------------------
    Standard Deviation: 1.0600
      Title: History of the World: Part I (1981)
    --------------------------------------------------
    Standard Deviation: 1.0604
      Title: Legend (1985)
    --------------------------------------------------
    Standard Deviation: 1.0614
      Title: Weekend at Bernie's (1989)
    --------------------------------------------------
    Standard Deviation: 1.0620
      Title: Little Shop of Horrors, The (1960)
    --------------------------------------------------
    Standard Deviation: 1.0620
      Title: Cell, The (2000)
    --------------------------------------------------
    Standard Deviation: 1.0621
      Title: Astronaut's Wife, The (1999)
    --------------------------------------------------
    Standard Deviation: 1.0626
      Title: Hairspray (1988)
    --------------------------------------------------
    Standard Deviation: 1.0630
      Title: Cruel Intentions (1999)
    --------------------------------------------------
    Standard Deviation: 1.0631
      Title: Lawnmower Man, The (1992)
    --------------------------------------------------
    Standard Deviation: 1.0632
      Title: Fantasia 2000 (1999)
    --------------------------------------------------
    Standard Deviation: 1.0632
      Title: Conan the Barbarian (1982)
    --------------------------------------------------
    Standard Deviation: 1.0633
      Title: Blue Velvet (1986)
    --------------------------------------------------
    Standard Deviation: 1.0642
      Title: Out of Africa (1985)
    --------------------------------------------------
    Standard Deviation: 1.0643
      Title: Pi (1998)
    --------------------------------------------------
    Standard Deviation: 1.0645
      Title: Jacob's Ladder (1990)
    --------------------------------------------------
    Standard Deviation: 1.0647
      Title: Police Academy (1984)
    --------------------------------------------------
    Standard Deviation: 1.0649
      Title: Meet Joe Black (1998)
    --------------------------------------------------
    Standard Deviation: 1.0651
      Title: Patriot, The (2000)
    --------------------------------------------------
    Standard Deviation: 1.0651
      Title: Grease 2 (1982)
    --------------------------------------------------
    Standard Deviation: 1.0652
      Title: Wild Wild West (1999)
    --------------------------------------------------
    Standard Deviation: 1.0655
      Title: Ghost Dog: The Way of the Samurai (1999)
    --------------------------------------------------
    Standard Deviation: 1.0656
      Title: Any Given Sunday (1999)
    --------------------------------------------------
    Standard Deviation: 1.0675
      Title: Powder (1995)
    --------------------------------------------------
    Standard Deviation: 1.0681
      Title: What Lies Beneath (2000)
    --------------------------------------------------
    Standard Deviation: 1.0691
      Title: Bachelor, The (1999)
    --------------------------------------------------
    Standard Deviation: 1.0696
      Title: Reindeer Games (2000)
    --------------------------------------------------
    Standard Deviation: 1.0698
      Title: Unbearable Lightness of Being, The (1988)
    --------------------------------------------------
    Standard Deviation: 1.0699
      Title: Nutty Professor, The (1996)
    --------------------------------------------------
    Standard Deviation: 1.0703
      Title: Nightmare Before Christmas, The (1993)
    --------------------------------------------------
    Standard Deviation: 1.0706
      Title: Rushmore (1998)
    --------------------------------------------------
    Standard Deviation: 1.0707
      Title: Deep Blue Sea (1999)
    --------------------------------------------------
    Standard Deviation: 1.0708
      Title: Hook (1991)
    --------------------------------------------------
    Standard Deviation: 1.0717
      Title: Grumpier Old Men (1995)
    --------------------------------------------------
    Standard Deviation: 1.0720
      Title: Young Guns II (1990)
    --------------------------------------------------
    Standard Deviation: 1.0725
      Title: Haunting, The (1999)
    --------------------------------------------------
    Standard Deviation: 1.0728
      Title: Soldier (1998)
    --------------------------------------------------
    Standard Deviation: 1.0728
      Title: Rosencrantz and Guildenstern Are Dead (1990)
    --------------------------------------------------
    Standard Deviation: 1.0732
      Title: Flubber (1997)
    --------------------------------------------------
    Standard Deviation: 1.0736
      Title: Heavy Metal (1981)
    --------------------------------------------------
    Standard Deviation: 1.0744
      Title: Amityville Horror, The (1979)
    --------------------------------------------------
    Standard Deviation: 1.0747
      Title: House on Haunted Hill, The (1999)
    --------------------------------------------------
    Standard Deviation: 1.0748
      Title: Big Daddy (1999)
    --------------------------------------------------
    Standard Deviation: 1.0751
      Title: Hot Shots! Part Deux (1993)
    --------------------------------------------------
    Standard Deviation: 1.0754
      Title: Yellow Submarine (1968)
    --------------------------------------------------
    Standard Deviation: 1.0755
      Title: Dante's Peak (1997)
    --------------------------------------------------
    Standard Deviation: 1.0756
      Title: Home Alone 2: Lost in New York (1992)
    --------------------------------------------------
    Standard Deviation: 1.0757
      Title: Pitch Black (2000)
    --------------------------------------------------
    Standard Deviation: 1.0766
      Title: Hercules (1997)
    --------------------------------------------------
    Standard Deviation: 1.0767
      Title: Can't Hardly Wait (1998)
    --------------------------------------------------
    Standard Deviation: 1.0768
      Title: Candyman (1992)
    --------------------------------------------------
    Standard Deviation: 1.0769
      Title: City of Angels (1998)
    --------------------------------------------------
    Standard Deviation: 1.0770
      Title: Alien� (1992)
    --------------------------------------------------
    Standard Deviation: 1.0771
      Title: Hollow Man (2000)
    --------------------------------------------------
    Standard Deviation: 1.0781
      Title: Small Soldiers (1998)
    --------------------------------------------------
    Standard Deviation: 1.0793
      Title: Snow Falling on Cedars (1999)
    --------------------------------------------------
    Standard Deviation: 1.0793
      Title: Christmas Vacation (1989)
    --------------------------------------------------
    Standard Deviation: 1.0797
      Title: Rambo III (1988)
    --------------------------------------------------
    Standard Deviation: 1.0799
      Title: Bulworth (1998)
    --------------------------------------------------
    Standard Deviation: 1.0800
      Title: Fight Club (1999)
    --------------------------------------------------
    Standard Deviation: 1.0805
      Title: Talented Mr. Ripley, The (1999)
    --------------------------------------------------
    Standard Deviation: 1.0807
      Title: Alien: Resurrection (1997)
    --------------------------------------------------
    Standard Deviation: 1.0808
      Title: Final Destination (2000)
    --------------------------------------------------
    Standard Deviation: 1.0812
      Title: Wolf (1994)
    --------------------------------------------------
    Standard Deviation: 1.0831
      Title: Home Alone (1990)
    --------------------------------------------------
    Standard Deviation: 1.0836
      Title: Lost World: Jurassic Park, The (1997)
    --------------------------------------------------
    Standard Deviation: 1.0837
      Title: Conquest of the Planet of the Apes (1972)
    --------------------------------------------------
    Standard Deviation: 1.0839
      Title: Howard the Duck (1986)
    --------------------------------------------------
    Standard Deviation: 1.0840
      Title: End of Days (1999)
    --------------------------------------------------
    Standard Deviation: 1.0848
      Title: Bram Stoker's Dracula (1992)
    --------------------------------------------------
    Standard Deviation: 1.0852
      Title: Popeye (1980)
    --------------------------------------------------
    Standard Deviation: 1.0867
      Title: Austin Powers: International Man of Mystery (1997)
    --------------------------------------------------
    Standard Deviation: 1.0868
      Title: Beach, The (2000)
    --------------------------------------------------
    Standard Deviation: 1.0869
      Title: First Wives Club, The (1996)
    --------------------------------------------------
    Standard Deviation: 1.0870
      Title: Naked Gun: From the Files of Police Squad!, The (1988)
    --------------------------------------------------
    Standard Deviation: 1.0870
      Title: American Pie (1999)
    --------------------------------------------------
    Standard Deviation: 1.0880
      Title: Teenage Mutant Ninja Turtles II: The Secret of the Ooze (1991)
    --------------------------------------------------
    Standard Deviation: 1.0887
      Title: Man in the Iron Mask, The (1998)
    --------------------------------------------------
    Standard Deviation: 1.0892
      Title: Barb Wire (1996)
    --------------------------------------------------
    Standard Deviation: 1.0899
      Title: Event Horizon (1997)
    --------------------------------------------------
    Standard Deviation: 1.0901
      Title: Fifth Element, The (1997)
    --------------------------------------------------
    Standard Deviation: 1.0901
      Title: Fantasia (1940)
    --------------------------------------------------
    Standard Deviation: 1.0903
      Title: Varsity Blues (1999)
    --------------------------------------------------
    Standard Deviation: 1.0912
      Title: Legends of the Fall (1994)
    --------------------------------------------------
    Standard Deviation: 1.0917
      Title: European Vacation (1985)
    --------------------------------------------------
    Standard Deviation: 1.0928
      Title: Crow, The (1994)
    --------------------------------------------------
    Standard Deviation: 1.0933
      Title: Blade (1998)
    --------------------------------------------------
    Standard Deviation: 1.0935
      Title: Leaving Las Vegas (1995)
    --------------------------------------------------
    Standard Deviation: 1.0946
      Title: Teenage Mutant Ninja Turtles (1990)
    --------------------------------------------------
    Standard Deviation: 1.0951
      Title: Terms of Endearment (1983)
    --------------------------------------------------
    Standard Deviation: 1.0957
      Title: G.I. Jane (1997)
    --------------------------------------------------
    Standard Deviation: 1.0966
      Title: Star Trek: The Motion Picture (1979)
    --------------------------------------------------
    Standard Deviation: 1.0967
      Title: Titan A.E. (2000)
    --------------------------------------------------
    Standard Deviation: 1.0969
      Title: There's Something About Mary (1998)
    --------------------------------------------------
    Standard Deviation: 1.0971
      Title: Where the Heart Is (2000)
    --------------------------------------------------
    Standard Deviation: 1.0973
      Title: Blob, The (1958)
    --------------------------------------------------
    Standard Deviation: 1.0973
      Title: Pocahontas (1995)
    --------------------------------------------------
    Standard Deviation: 1.0976
      Title: Lethal Weapon 4 (1998)
    --------------------------------------------------
    Standard Deviation: 1.0987
      Title: Brady Bunch Movie, The (1995)
    --------------------------------------------------
    Standard Deviation: 1.0987
      Title: 101 Dalmatians (1996)
    --------------------------------------------------
    Standard Deviation: 1.1005
      Title: Big Kahuna, The (2000)
    --------------------------------------------------
    Standard Deviation: 1.1015
      Title: Twister (1996)
    --------------------------------------------------
    Standard Deviation: 1.1022
      Title: Spawn (1997)
    --------------------------------------------------
    Standard Deviation: 1.1024
      Title: Goonies, The (1985)
    --------------------------------------------------
    Standard Deviation: 1.1029
      Title: Exorcist, The (1973)
    --------------------------------------------------
    Standard Deviation: 1.1033
      Title: Kids in the Hall: Brain Candy (1996)
    --------------------------------------------------
    Standard Deviation: 1.1041
      Title: Escape from L.A. (1996)
    --------------------------------------------------
    Standard Deviation: 1.1041
      Title: Saint, The (1997)
    --------------------------------------------------
    Standard Deviation: 1.1048
      Title: Johnny Mnemonic (1995)
    --------------------------------------------------
    Standard Deviation: 1.1049
      Title: Big Lebowski, The (1998)
    --------------------------------------------------
    Standard Deviation: 1.1056
      Title: Mummy, The (1999)
    --------------------------------------------------
    Standard Deviation: 1.1068
      Title: Muppet Treasure Island (1996)
    --------------------------------------------------
    Standard Deviation: 1.1068
      Title: Road Trip (2000)
    --------------------------------------------------
    Standard Deviation: 1.1071
      Title: Prince of Tides, The (1991)
    --------------------------------------------------
    Standard Deviation: 1.1076
      Title: Lake Placid (1999)
    --------------------------------------------------
    Standard Deviation: 1.1077
      Title: Ninth Gate, The (2000)
    --------------------------------------------------
    Standard Deviation: 1.1078
      Title: 'burbs, The (1989)
    --------------------------------------------------
    Standard Deviation: 1.1079
      Title: Independence Day (ID4) (1996)
    --------------------------------------------------
    Standard Deviation: 1.1083
      Title: Clockwork Orange, A (1971)
    --------------------------------------------------
    Standard Deviation: 1.1087
      Title: George of the Jungle (1997)
    --------------------------------------------------
    Standard Deviation: 1.1094
      Title: Bridges of Madison County, The (1995)
    --------------------------------------------------
    Standard Deviation: 1.1103
      Title: Batman & Robin (1997)
    --------------------------------------------------
    Standard Deviation: 1.1111
      Title: Angel Heart (1987)
    --------------------------------------------------
    Standard Deviation: 1.1114
      Title: Mission: Impossible 2 (2000)
    --------------------------------------------------
    Standard Deviation: 1.1123
      Title: Dogma (1999)
    --------------------------------------------------
    Standard Deviation: 1.1125
      Title: Parent Trap, The (1998)
    --------------------------------------------------
    Standard Deviation: 1.1133
      Title: Grease (1978)
    --------------------------------------------------
    Standard Deviation: 1.1133
      Title: Mallrats (1995)
    --------------------------------------------------
    Standard Deviation: 1.1134
      Title: 8MM (1999)
    --------------------------------------------------
    Standard Deviation: 1.1135
      Title: Godzilla (1998)
    --------------------------------------------------
    Standard Deviation: 1.1149
      Title: Gone in 60 Seconds (2000)
    --------------------------------------------------
    Standard Deviation: 1.1153
      Title: Scream 2 (1997)
    --------------------------------------------------
    Standard Deviation: 1.1163
      Title: Lost in Space (1998)
    --------------------------------------------------
    Standard Deviation: 1.1175
      Title: Mission to Mars (2000)
    --------------------------------------------------
    Standard Deviation: 1.1179
      Title: Cable Guy, The (1996)
    --------------------------------------------------
    Standard Deviation: 1.1191
      Title: Eye of the Beholder (1999)
    --------------------------------------------------
    Standard Deviation: 1.1203
      Title: Evil Dead II (Dead By Dawn) (1987)
    --------------------------------------------------
    Standard Deviation: 1.1203
      Title: Kingpin (1996)
    --------------------------------------------------
    Standard Deviation: 1.1210
      Title: Hackers (1995)
    --------------------------------------------------
    Standard Deviation: 1.1211
      Title: Rocky V (1990)
    --------------------------------------------------
    Standard Deviation: 1.1236
      Title: Three Amigos! (1986)
    --------------------------------------------------
    Standard Deviation: 1.1244
      Title: Hope Floats (1998)
    --------------------------------------------------
    Standard Deviation: 1.1245
      Title: Piano, The (1993)
    --------------------------------------------------
    Standard Deviation: 1.1256
      Title: Pink Floyd - The Wall (1982)
    --------------------------------------------------
    Standard Deviation: 1.1257
      Title: Star Wars: Episode I - The Phantom Menace (1999)
    --------------------------------------------------
    Standard Deviation: 1.1266
      Title: American Werewolf in Paris, An (1997)
    --------------------------------------------------
    Standard Deviation: 1.1268
      Title: Last Man Standing (1996)
    --------------------------------------------------
    Standard Deviation: 1.1297
      Title: Waterworld (1995)
    --------------------------------------------------
    Standard Deviation: 1.1302
      Title: First Knight (1995)
    --------------------------------------------------
    Standard Deviation: 1.1303
      Title: Mystery Science Theater 3000: The Movie (1996)
    --------------------------------------------------
    Standard Deviation: 1.1322
      Title: Magnolia (1999)
    --------------------------------------------------
    Standard Deviation: 1.1325
      Title: Sound of Music, The (1965)
    --------------------------------------------------
    Standard Deviation: 1.1341
      Title: Friday the 13th (1980)
    --------------------------------------------------
    Standard Deviation: 1.1343
      Title: Stigmata (1999)
    --------------------------------------------------
    Standard Deviation: 1.1343
      Title: Man Who Knew Too Little, The (1997)
    --------------------------------------------------
    Standard Deviation: 1.1349
      Title: Pet Sematary (1989)
    --------------------------------------------------
    Standard Deviation: 1.1363
      Title: Face/Off (1997)
    --------------------------------------------------
    Standard Deviation: 1.1375
      Title: Halloween (1978)
    --------------------------------------------------
    Standard Deviation: 1.1377
      Title: Nightmare on Elm Street 3: Dream Warriors, A (1987)
    --------------------------------------------------
    Standard Deviation: 1.1383
      Title: Clue (1985)
    --------------------------------------------------
    Standard Deviation: 1.1394
      Title: Lord of the Rings, The (1978)
    --------------------------------------------------
    Standard Deviation: 1.1402
      Title: Scream 3 (2000)
    --------------------------------------------------
    Standard Deviation: 1.1403
      Title: Loaded Weapon 1 (1993)
    --------------------------------------------------
    Standard Deviation: 1.1404
      Title: 13th Warrior, The (1999)
    --------------------------------------------------
    Standard Deviation: 1.1405
      Title: Ace Ventura: Pet Detective (1994)
    --------------------------------------------------
    Standard Deviation: 1.1415
      Title: Nightmare on Elm Street Part 2: Freddy's Revenge, A (1985)
    --------------------------------------------------
    Standard Deviation: 1.1432
      Title: Tommy Boy (1995)
    --------------------------------------------------
    Standard Deviation: 1.1442
      Title: Empire Records (1995)
    --------------------------------------------------
    Standard Deviation: 1.1460
      Title: Mystery Men (1999)
    --------------------------------------------------
    Standard Deviation: 1.1460
      Title: I Know What You Did Last Summer (1997)
    --------------------------------------------------
    Standard Deviation: 1.1496
      Title: Happy Gilmore (1996)
    --------------------------------------------------
    Standard Deviation: 1.1511
      Title: Austin Powers: The Spy Who Shagged Me (1999)
    --------------------------------------------------
    Standard Deviation: 1.1528
      Title: Star Trek V: The Final Frontier (1989)
    --------------------------------------------------
    Standard Deviation: 1.1538
      Title: Topsy-Turvy (1999)
    --------------------------------------------------
    Standard Deviation: 1.1550
      Title: Gremlins 2: The New Batch (1990)
    --------------------------------------------------
    Standard Deviation: 1.1556
      Title: Happiness (1998)
    --------------------------------------------------
    Standard Deviation: 1.1558
      Title: Night of the Living Dead (1968)
    --------------------------------------------------
    Standard Deviation: 1.1565
      Title: Porky's (1981)
    --------------------------------------------------
    Standard Deviation: 1.1581
      Title: Jumpin' Jack Flash (1986)
    --------------------------------------------------
    Standard Deviation: 1.1584
      Title: Rocky IV (1985)
    --------------------------------------------------
    Standard Deviation: 1.1585
      Title: Drop Dead Fred (1991)
    --------------------------------------------------
    Standard Deviation: 1.1609
      Title: Phantasm (1979)
    --------------------------------------------------
    Standard Deviation: 1.1610
      Title: Skulls, The (2000)
    --------------------------------------------------
    Standard Deviation: 1.1616
      Title: Adventures of Buckaroo Bonzai Across the 8th Dimension, The (1984)
    --------------------------------------------------
    Standard Deviation: 1.1616
      Title: Drop Dead Gorgeous (1999)
    --------------------------------------------------
    Standard Deviation: 1.1644
      Title: What Dreams May Come (1998)
    --------------------------------------------------
    Standard Deviation: 1.1661
      Title: I Still Know What You Did Last Summer (1998)
    --------------------------------------------------
    Standard Deviation: 1.1671
      Title: William Shakespeare's Romeo and Juliet (1996)
    --------------------------------------------------
    Standard Deviation: 1.1672
      Title: Robin Hood: Men in Tights (1993)
    --------------------------------------------------
    Standard Deviation: 1.1674
      Title: Titanic (1997)
    --------------------------------------------------
    Standard Deviation: 1.1689
      Title: Dirty Dancing (1987)
    --------------------------------------------------
    Standard Deviation: 1.1691
      Title: Buffalo 66 (1998)
    --------------------------------------------------
    Standard Deviation: 1.1697
      Title: Story of Us, The (1999)
    --------------------------------------------------
    Standard Deviation: 1.1707
      Title: Return to Oz (1985)
    --------------------------------------------------
    Standard Deviation: 1.1716
      Title: Spaceballs (1987)
    --------------------------------------------------
    Standard Deviation: 1.1732
      Title: Barbarella (1968)
    --------------------------------------------------
    Standard Deviation: 1.1756
      Title: Messenger: The Story of Joan of Arc, The (1999)
    --------------------------------------------------
    Standard Deviation: 1.1786
      Title: eXistenZ (1999)
    --------------------------------------------------
    Standard Deviation: 1.1787
      Title: Ace Ventura: When Nature Calls (1995)
    --------------------------------------------------
    Standard Deviation: 1.1788
      Title: From Dusk Till Dawn (1996)
    --------------------------------------------------
    Standard Deviation: 1.1797
      Title: Me, Myself and Irene (2000)
    --------------------------------------------------
    Standard Deviation: 1.1828
      Title: Psycho (1998)
    --------------------------------------------------
    Standard Deviation: 1.1831
      Title: Dune (1984)
    --------------------------------------------------
    Standard Deviation: 1.1856
      Title: Mars Attacks! (1996)
    --------------------------------------------------
    Standard Deviation: 1.1858
      Title: English Patient, The (1996)
    --------------------------------------------------
    Standard Deviation: 1.1859
      Title: Pee-wee's Big Adventure (1985)
    --------------------------------------------------
    Standard Deviation: 1.1895
      Title: Nightmare on Elm Street, A (1984)
    --------------------------------------------------
    Standard Deviation: 1.1907
      Title: American Psycho (2000)
    --------------------------------------------------
    Standard Deviation: 1.1909
      Title: Beavis and Butt-head Do America (1996)
    --------------------------------------------------
    Standard Deviation: 1.1959
      Title: Bringing Out the Dead (1999)
    --------------------------------------------------
    Standard Deviation: 1.1964
      Title: Breaking the Waves (1996)
    --------------------------------------------------
    Standard Deviation: 1.2019
      Title: Godzilla (Gojira) (1954)
    --------------------------------------------------
    Standard Deviation: 1.2032
      Title: Starship Troopers (1997)
    --------------------------------------------------
    Standard Deviation: 1.2034
      Title: Armageddon (1998)
    --------------------------------------------------
    Standard Deviation: 1.2111
      Title: For Love of the Game (1999)
    --------------------------------------------------
    Standard Deviation: 1.2131
      Title: Patch Adams (1998)
    --------------------------------------------------
    Standard Deviation: 1.2146
      Title: Last Temptation of Christ, The (1988)
    --------------------------------------------------
    Standard Deviation: 1.2153
      Title: Thin Red Line, The (1998)
    --------------------------------------------------
    Standard Deviation: 1.2189
      Title: Toys (1992)
    --------------------------------------------------
    Standard Deviation: 1.2191
      Title: Waterboy, The (1998)
    --------------------------------------------------
    Standard Deviation: 1.2227
      Title: Serial Mom (1994)
    --------------------------------------------------
    Standard Deviation: 1.2240
      Title: Scary Movie (2000)
    --------------------------------------------------
    Standard Deviation: 1.2263
      Title: Deuce Bigalow: Male Gigolo (1999)
    --------------------------------------------------
    Standard Deviation: 1.2354
      Title: South Park: Bigger, Longer and Uncut (1999)
    --------------------------------------------------
    Standard Deviation: 1.2376
      Title: Wes Craven's New Nightmare (1994)
    --------------------------------------------------
    Standard Deviation: 1.2394
      Title: Babe: Pig in the City (1998)
    --------------------------------------------------
    Standard Deviation: 1.2430
      Title: Hellraiser (1987)
    --------------------------------------------------
    Standard Deviation: 1.2455
      Title: Bicentennial Man (1999)
    --------------------------------------------------
    Standard Deviation: 1.2464
      Title: Fear and Loathing in Las Vegas (1998)
    --------------------------------------------------
    Standard Deviation: 1.2500
      Title: Billy Madison (1995)
    --------------------------------------------------
    Standard Deviation: 1.2536
      Title: Evita (1996)
    --------------------------------------------------
    Standard Deviation: 1.2596
      Title: Eyes Wide Shut (1999)
    --------------------------------------------------
    Standard Deviation: 1.2602
      Title: Rocky Horror Picture Show, The (1975)
    --------------------------------------------------
    Standard Deviation: 1.2777
      Title: Tank Girl (1995)
    --------------------------------------------------
    Standard Deviation: 1.3072
      Title: Natural Born Killers (1994)
    --------------------------------------------------
    Standard Deviation: 1.3164
      Title: Blair Witch Project, The (1999)
    --------------------------------------------------
    Standard Deviation: 1.3213
      Title: Dumb & Dumber (1994)
    --------------------------------------------------

```python
# 13.根据评分标准差进行降序排序并读取前十行，也即输出评分标准差最大的十个电影标题。

# 提取活跃电影的标准差列，并按降序排序
sorted_active_movies_by_std = active_movies.sort_values(by='std_rating', ascending=False)

# 输出评分标准差最大的十个电影标题
top_ten_std_movies = sorted_active_movies_by_std.head(10)
print("Top 10 Movies by Standard Deviation of Ratings:")
for index, row in top_ten_std_movies.iterrows():
    display(f"Title: {row['title']}, Standard Deviation: {row['std_rating']:.4f}")
```

    Top 10 Movies by Standard Deviation of Ratings:



    'Title: Dumb & Dumber (1994), Standard Deviation: 1.3213'



    'Title: Dumb & Dumber (1994), Standard Deviation: 1.3213'



    'Title: Dumb & Dumber (1994), Standard Deviation: 1.3213'



    'Title: Dumb & Dumber (1994), Standard Deviation: 1.3213'



    'Title: Dumb & Dumber (1994), Standard Deviation: 1.3213'



    'Title: Dumb & Dumber (1994), Standard Deviation: 1.3213'



    'Title: Dumb & Dumber (1994), Standard Deviation: 1.3213'



    'Title: Dumb & Dumber (1994), Standard Deviation: 1.3213'



    'Title: Dumb & Dumber (1994), Standard Deviation: 1.3213'



    'Title: Dumb & Dumber (1994), Standard Deviation: 1.3213'

```python
#14. 读取电影中genres列数据，并通过|分隔开。将分割后的数据命名为genre列，原数据列genres删除

# 使用'|'字符分割'genres'列中的字符串，并扩展成新的列
merged_df['genre'] = merged_df['genres'].str.split('|')

# 查看前几行以确认新列已正确创建
print(merged_df[['title', 'genres', 'genre']].head())

# 删除原始的'genres'列（如果不再需要）
merged_df = merged_df.drop(columns=['genres'])
```

                  title                       genres  \
    0  Toy Story (1995)  Animation|Children's|Comedy
    1  Toy Story (1995)  Animation|Children's|Comedy
    2  Toy Story (1995)  Animation|Children's|Comedy
    3  Toy Story (1995)  Animation|Children's|Comedy
    4  Toy Story (1995)  Animation|Children's|Comedy

                                 genre
    0  [Animation, Children's, Comedy]
    1  [Animation, Children's, Comedy]
    2  [Animation, Children's, Comedy]
    3  [Animation, Children's, Comedy]
    4  [Animation, Children's, Comedy]

```python
#15 使用explode函数将genre列中分割的数据展开成单独的几列数据并记为movies_exploded这个新DataFrame，输出前十行数据

# 使用explode函数将'genre'列中的列表元素展开成单独的几行
movies_exploded = merged_df.explode('genre')

# 输出前十行数据
display(movies_exploded.head(10))
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>movieId</th>
      <th>title</th>
      <th>userId</th>
      <th>rating</th>
      <th>timestamp</th>
      <th>mean_rating</th>
      <th>std_rating</th>
      <th>rating_count</th>
      <th>genre</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>Toy Story (1995)</td>
      <td>1</td>
      <td>5</td>
      <td>978824268</td>
      <td>4.146846</td>
      <td>0.852349</td>
      <td>2077</td>
      <td>Animation</td>
    </tr>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>Toy Story (1995)</td>
      <td>1</td>
      <td>5</td>
      <td>978824268</td>
      <td>4.146846</td>
      <td>0.852349</td>
      <td>2077</td>
      <td>Children's</td>
    </tr>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>Toy Story (1995)</td>
      <td>1</td>
      <td>5</td>
      <td>978824268</td>
      <td>4.146846</td>
      <td>0.852349</td>
      <td>2077</td>
      <td>Comedy</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1</td>
      <td>Toy Story (1995)</td>
      <td>6</td>
      <td>4</td>
      <td>978237008</td>
      <td>4.146846</td>
      <td>0.852349</td>
      <td>2077</td>
      <td>Animation</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1</td>
      <td>Toy Story (1995)</td>
      <td>6</td>
      <td>4</td>
      <td>978237008</td>
      <td>4.146846</td>
      <td>0.852349</td>
      <td>2077</td>
      <td>Children's</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1</td>
      <td>Toy Story (1995)</td>
      <td>6</td>
      <td>4</td>
      <td>978237008</td>
      <td>4.146846</td>
      <td>0.852349</td>
      <td>2077</td>
      <td>Comedy</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1</td>
      <td>Toy Story (1995)</td>
      <td>8</td>
      <td>4</td>
      <td>978233496</td>
      <td>4.146846</td>
      <td>0.852349</td>
      <td>2077</td>
      <td>Animation</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1</td>
      <td>Toy Story (1995)</td>
      <td>8</td>
      <td>4</td>
      <td>978233496</td>
      <td>4.146846</td>
      <td>0.852349</td>
      <td>2077</td>
      <td>Children's</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1</td>
      <td>Toy Story (1995)</td>
      <td>8</td>
      <td>4</td>
      <td>978233496</td>
      <td>4.146846</td>
      <td>0.852349</td>
      <td>2077</td>
      <td>Comedy</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1</td>
      <td>Toy Story (1995)</td>
      <td>9</td>
      <td>5</td>
      <td>978225952</td>
      <td>4.146846</td>
      <td>0.852349</td>
      <td>2077</td>
      <td>Animation</td>
    </tr>
  </tbody>
</table>
</div>

```python
#16 将movies_exploded，ratings，users这三个合并起来生成一个新DataFrame，并读取第一行数据。按照genre和age进行分组，
#   并计算每个组评分的平均值，使用unstack函数将结果重塑为以age为列索引的形式。

# 合并movies_exploded和ratings，基于movieId
merged_mr = pd.merge(ratings, movies_exploded, on='movieId', how='inner')

# 合并上一步的结果和users，基于userId
merged_df = pd.merge(merged_mr, users, on='userId', how='inner')

# 读取合并后DataFrame的第一行数据
first_row = merged_df.iloc[0]
print("合并后的DataFrame第一行数据:")
print(first_row)

# 按照genre和age进行分组，并计算每个组评分的平均值
grouped_ratings = merged_df.groupby(['genre', 'age'])['rating'].mean().reset_index()

# 使用unstack函数将结果重塑为以age为列索引的形式
# 首先，我们需要将DataFrame设置为以genre为索引，age为列的多级索引形式
pivot_ratings = grouped_ratings.pivot(index='genre', columns='age', values='rating')

# 如果存在缺失的age值，它们将在pivot操作中显示为NaN。您可以选择填充这些NaN值。
pivot_ratings = pivot_ratings.fillna(0)

# 显示重塑后的DataFrame
print("按genre和age分组后的评分平均值:")
print(pivot_ratings)
```

    ---------------------------------------------------------------------------

    MemoryError                               Traceback (most recent call last)

    Cell In[172], line 5
          1 #16 将movies_exploded，ratings，users这三个合并起来生成一个新DataFrame，并读取第一行数据。按照genre和age进行分组，
          2 #   并计算每个组评分的平均值，使用unstack函数将结果重塑为以age为列索引的形式。
          3
          4 # 合并movies_exploded和ratings，基于movieId
    ----> 5 merged_mr = pd.merge(ratings, movies_exploded, on='movieId', how='inner')
          7 # 合并上一步的结果和users，基于userId
          8 merged_df = pd.merge(merged_mr, users, on='userId', how='inner')


    File C:\ProgramData\anaconda3\Lib\site-packages\pandas\core\reshape\merge.py:162, in merge(left, right, how, on, left_on, right_on, left_index, right_index, sort, suffixes, copy, indicator, validate)
        131 @Substitution("\nleft : DataFrame or named Series")
        132 @Appender(_merge_doc, indents=0)
        133 def merge(
       (...)
        146     validate: str | None = None,
        147 ) -> DataFrame:
        148     op = _MergeOperation(
        149         left,
        150         right,
       (...)
        160         validate=validate,
        161     )
    --> 162     return op.get_result(copy=copy)


    File C:\ProgramData\anaconda3\Lib\site-packages\pandas\core\reshape\merge.py:809, in _MergeOperation.get_result(self, copy)
        806 if self.indicator:
        807     self.left, self.right = self._indicator_pre_merge(self.left, self.right)
    --> 809 join_index, left_indexer, right_indexer = self._get_join_info()
        811 result = self._reindex_and_concat(
        812     join_index, left_indexer, right_indexer, copy=copy
        813 )
        814 result = result.__finalize__(self, method=self._merge_type)


    File C:\ProgramData\anaconda3\Lib\site-packages\pandas\core\reshape\merge.py:1065, in _MergeOperation._get_join_info(self)
       1061     join_index, right_indexer, left_indexer = _left_join_on_index(
       1062         right_ax, left_ax, self.right_join_keys, sort=self.sort
       1063     )
       1064 else:
    -> 1065     (left_indexer, right_indexer) = self._get_join_indexers()
       1067     if self.right_index:
       1068         if len(self.left) > 0:


    File C:\ProgramData\anaconda3\Lib\site-packages\pandas\core\reshape\merge.py:1038, in _MergeOperation._get_join_indexers(self)
       1036 def _get_join_indexers(self) -> tuple[npt.NDArray[np.intp], npt.NDArray[np.intp]]:
       1037     """return the join indexers"""
    -> 1038     return get_join_indexers(
       1039         self.left_join_keys, self.right_join_keys, sort=self.sort, how=self.how
       1040     )


    File C:\ProgramData\anaconda3\Lib\site-packages\pandas\core\reshape\merge.py:1690, in get_join_indexers(left_keys, right_keys, sort, how, **kwargs)
       1680 join_func = {
       1681     "inner": libjoin.inner_join,
       1682     "left": libjoin.left_outer_join,
       (...)
       1686     "outer": libjoin.full_outer_join,
       1687 }[how]
       1689 # error: Cannot call function of unknown type
    -> 1690 return join_func(lkey, rkey, count, **kwargs)


    File C:\ProgramData\anaconda3\Lib\site-packages\pandas\_libs\join.pyx:49, in pandas._libs.join.inner_join()


    MemoryError: Unable to allocate 14.5 GiB for an array with shape (1949605805,) and data type int64

```python

```
