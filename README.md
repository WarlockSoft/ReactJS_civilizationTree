Приложение представляет собой дерево технологий из игры Civilization I. Само дерево хранится в формате json и имеет следующие поля: Идентификатор технологии, Название технологии, флаг изучения технологии и два массива: на какие другие технологии влияет данная технология и от каких других зависит.
  
Реализован класс Science. Он имеет следующие свойста: Идентификатор, Флаг изучения, Название, Зависимые технологии, Зависящие технологии. Также хранит JSon, массив всех технологий и массив активных технологий. 
  
У класса есть следующие методы: 
  
getActiveScience - Получить активные технологии. Используется в начале игры.
   
setStudy - Получает технологию в качестве параметра и указать, что она изучена. Метод скрывает технологию из DOM дерева, удаляет ее из массива и проверяет какие новые технологии появились.
   
getScienceByID - Получить технологию по идентификатору. 
   
checkActiveScience - Принимает Технологию, на которую нажал пользователь, в качестве параметра. Перебирает массив с технологиями, на которые может повлиять, удаляет у них выбранную технологию из массива родительских, которую получили в виде параметра. Если в массиве родительских больше нет технологий (то есть изучены все родительские), то выводим эту технологию на экран и добавляем в массив активных технологий. Если активных технологий больше нет, выводим сообщение, что все технологии изучены
    
addToActiveScience - Добавляем в массив активных технологий и выводим на экран.