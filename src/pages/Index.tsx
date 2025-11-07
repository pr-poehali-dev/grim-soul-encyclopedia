import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const sections = [
  { id: 'characters', name: 'Персонажи', icon: 'User' },
  { id: 'monsters', name: 'Монстры', icon: 'Skull' },
  { id: 'items', name: 'Предметы', icon: 'Sword' },
  { id: 'resources', name: 'Ресурсы', icon: 'Package' },
  { id: 'locations', name: 'Локации', icon: 'Map' },
  { id: 'calculator', name: 'Калькулятор', icon: 'Calculator' },
  { id: 'blog', name: 'Блог', icon: 'BookOpen' }
];

const characters = [
  { 
    name: 'Тёмный Рыцарь', 
    level: 50, 
    description: 'Могучий воин, прошедший через тьму и вернувшийся',
    stats: { hp: 1200, attack: 180, defense: 150 },
    image: 'https://cdn.poehali.dev/projects/8e3ebb2b-8f48-49b1-a076-f11979ff17bb/files/222080bb-bbd9-4716-892a-ca255ac3a511.jpg'
  },
  { 
    name: 'Проклятый Маг', 
    level: 45, 
    description: 'Владеет тёмной магией, способен призывать нежить',
    stats: { hp: 800, attack: 250, defense: 80 },
    image: 'https://cdn.poehali.dev/projects/8e3ebb2b-8f48-49b1-a076-f11979ff17bb/files/222080bb-bbd9-4716-892a-ca255ac3a511.jpg'
  },
  { 
    name: 'Охотник на Тварей', 
    level: 40, 
    description: 'Выслеживает монстров в самых опасных уголках мира',
    stats: { hp: 950, attack: 200, defense: 120 },
    image: 'https://cdn.poehali.dev/projects/8e3ebb2b-8f48-49b1-a076-f11979ff17bb/files/222080bb-bbd9-4716-892a-ca255ac3a511.jpg'
  }
];

const monsters = [
  { 
    name: 'Ночной Ужас', 
    level: 35, 
    description: 'Порождение тьмы, охотится под покровом ночи',
    danger: 'Высокая',
    image: 'https://cdn.poehali.dev/projects/8e3ebb2b-8f48-49b1-a076-f11979ff17bb/files/1cc2c26d-8f69-41e7-8f8f-551ab4c96436.jpg'
  },
  { 
    name: 'Древний Голем', 
    level: 50, 
    description: 'Каменный страж древних руин',
    danger: 'Экстремальная',
    image: 'https://cdn.poehali.dev/projects/8e3ebb2b-8f48-49b1-a076-f11979ff17bb/files/1cc2c26d-8f69-41e7-8f8f-551ab4c96436.jpg'
  },
  { 
    name: 'Проклятый Волк', 
    level: 25, 
    description: 'Одичавший оборотень, потерявший разум',
    danger: 'Средняя',
    image: 'https://cdn.poehali.dev/projects/8e3ebb2b-8f48-49b1-a076-f11979ff17bb/files/1cc2c26d-8f69-41e7-8f8f-551ab4c96436.jpg'
  }
];

const items = [
  { 
    name: 'Меч Теней', 
    type: 'Оружие', 
    rarity: 'Легендарное',
    damage: '+180 урона',
    image: 'https://cdn.poehali.dev/projects/8e3ebb2b-8f48-49b1-a076-f11979ff17bb/files/b59bbd64-c2f8-42a6-b707-11ae63694133.jpg'
  },
  { 
    name: 'Эликсир Жизни', 
    type: 'Зелье', 
    rarity: 'Редкое',
    damage: '+500 HP',
    image: 'https://cdn.poehali.dev/projects/8e3ebb2b-8f48-49b1-a076-f11979ff17bb/files/b59bbd64-c2f8-42a6-b707-11ae63694133.jpg'
  },
  { 
    name: 'Проклятая Броня', 
    type: 'Доспех', 
    rarity: 'Эпическое',
    damage: '+200 защиты',
    image: 'https://cdn.poehali.dev/projects/8e3ebb2b-8f48-49b1-a076-f11979ff17bb/files/b59bbd64-c2f8-42a6-b707-11ae63694133.jpg'
  }
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('characters');

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ 
          backgroundImage: 'url(https://cdn.poehali.dev/projects/8e3ebb2b-8f48-49b1-a076-f11979ff17bb/files/1cc2c26d-8f69-41e7-8f8f-551ab4c96436.jpg)',
          filter: 'blur(3px)'
        }}
      />
      
      <div className="relative z-10">
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold font-cinzel text-primary mb-2 animate-fade-in">
                  GRIM SOUL
                </h1>
                <p className="text-muted-foreground text-sm">Энциклопедия мрачного мира</p>
              </div>
              
              <div className="relative w-full md:w-96">
                <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Поиск по энциклопедии..."
                  className="pl-10 bg-background/80"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-8 animate-fade-in-up">
            {sections.map((section, idx) => (
              <Button
                key={section.id}
                variant={activeTab === section.id ? 'default' : 'outline'}
                className="flex flex-col items-center gap-2 h-auto py-4 hover:bg-primary/20 transition-all duration-300"
                onClick={() => setActiveTab(section.id)}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Icon name={section.icon as any} size={24} />
                <span className="text-xs font-semibold">{section.name}</span>
              </Button>
            ))}
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsContent value="characters" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {characters.map((char, idx) => (
                  <Card 
                    key={char.name} 
                    className="overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group animate-fade-in-up bg-card/80 backdrop-blur-sm"
                    style={{ animationDelay: `${idx * 0.15}s` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={char.image} 
                        alt={char.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                      <Badge className="absolute top-3 right-3 bg-primary">
                        Уровень {char.level}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="font-cinzel text-xl">{char.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{char.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="text-center">
                          <div className="text-xs text-muted-foreground mb-1">HP</div>
                          <div className="font-bold text-primary">{char.stats.hp}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-muted-foreground mb-1">Атака</div>
                          <div className="font-bold text-primary">{char.stats.attack}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-muted-foreground mb-1">Защита</div>
                          <div className="font-bold text-primary">{char.stats.defense}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="monsters" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {monsters.map((monster, idx) => (
                  <Card 
                    key={monster.name} 
                    className="overflow-hidden hover:border-destructive transition-all duration-300 hover:shadow-lg hover:shadow-destructive/20 group animate-fade-in-up bg-card/80 backdrop-blur-sm"
                    style={{ animationDelay: `${idx * 0.15}s` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={monster.image} 
                        alt={monster.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                      <Badge variant="destructive" className="absolute top-3 right-3">
                        Ур. {monster.level}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="font-cinzel text-xl flex items-center gap-2">
                        <Icon name="Skull" size={20} className="text-destructive" />
                        {monster.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{monster.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Опасность:</span>
                        <Badge variant={monster.danger === 'Экстремальная' ? 'destructive' : 'secondary'}>
                          {monster.danger}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="items" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, idx) => (
                  <Card 
                    key={item.name} 
                    className="overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group animate-fade-in-up bg-card/80 backdrop-blur-sm"
                    style={{ animationDelay: `${idx * 0.15}s` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                      <Badge className="absolute top-3 right-3 bg-primary">
                        {item.rarity}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="font-cinzel text-xl flex items-center gap-2">
                        <Icon name="Sword" size={20} className="text-primary" />
                        {item.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{item.type}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Бонус:</span>
                        <span className="font-bold text-primary">{item.damage}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="resources" className="mt-0">
              <Card className="bg-card/80 backdrop-blur-sm animate-fade-in">
                <CardHeader>
                  <CardTitle className="font-cinzel text-2xl">Ресурсы</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Дерево', 'Камень', 'Железо', 'Кожа', 'Кость', 'Ткань', 'Травы', 'Руда'].map((resource, idx) => (
                    <div 
                      key={resource} 
                      className="p-4 bg-secondary rounded-lg hover:bg-primary/20 transition-colors cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className="flex items-center gap-3">
                        <Icon name="Package" className="text-primary" size={24} />
                        <span className="font-semibold">{resource}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="locations" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['Проклятый Лес', 'Мёртвые Земли', 'Древние Руины', 'Забытое Кладбище', 'Тёмная Крепость', 'Логово Тьмы'].map((location, idx) => (
                  <Card 
                    key={location} 
                    className="hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer bg-card/80 backdrop-blur-sm animate-fade-in-up"
                    style={{ animationDelay: `${idx * 0.15}s` }}
                  >
                    <CardHeader>
                      <CardTitle className="font-cinzel text-xl flex items-center gap-3">
                        <Icon name="Map" className="text-primary" size={24} />
                        {location}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Опасная локация, полная тёмных тварей и древних проклятий
                      </p>
                      <div className="flex gap-2 mt-3">
                        <Badge variant="outline">Уровень: 30-50</Badge>
                        <Badge variant="destructive">Опасно</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="calculator" className="mt-0">
              <Card className="bg-card/80 backdrop-blur-sm animate-fade-in">
                <CardHeader>
                  <CardTitle className="font-cinzel text-2xl flex items-center gap-3">
                    <Icon name="Calculator" className="text-primary" size={28} />
                    Калькулятор ресурсов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Выберите предмет для крафта</label>
                      <Input placeholder="Введите название предмета..." className="bg-background/80" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Количество</label>
                        <Input type="number" defaultValue="1" className="bg-background/80" />
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Уровень</label>
                        <Input type="number" defaultValue="1" className="bg-background/80" />
                      </div>
                    </div>
                    <Button className="w-full">
                      <Icon name="Calculator" size={20} className="mr-2" />
                      Рассчитать
                    </Button>
                    <div className="mt-6 p-4 bg-secondary rounded-lg">
                      <h3 className="font-semibold mb-3">Требуемые ресурсы:</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Дерево</span>
                          <span className="font-bold">150</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Железо</span>
                          <span className="font-bold">75</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Кожа</span>
                          <span className="font-bold">50</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="blog" className="mt-0">
              <div className="space-y-6">
                {[
                  { title: 'Гайд по выживанию в первые дни', date: '5 ноября 2025' },
                  { title: 'Лучшее оружие для начинающих', date: '3 ноября 2025' },
                  { title: 'Как победить Ночного Ужаса', date: '1 ноября 2025' }
                ].map((post, idx) => (
                  <Card 
                    key={post.title} 
                    className="hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer bg-card/80 backdrop-blur-sm animate-fade-in-up"
                    style={{ animationDelay: `${idx * 0.15}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="font-cinzel text-xl mb-2">{post.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{post.date}</p>
                        </div>
                        <Icon name="BookOpen" className="text-primary" size={24} />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Подробное руководство для игроков Grim Soul. Узнайте секреты и стратегии выживания в мрачном мире.
                      </p>
                      <Button variant="outline" size="sm">
                        Читать далее
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>

        <footer className="border-t border-border mt-16 bg-card/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 GRIM SOUL Encyclopedia. Неофициальная энциклопедия игры.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
