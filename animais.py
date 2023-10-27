from abc import ABC, abstractmethod

# Classe abstrata
class Animal(ABC):
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    @abstractmethod
    def fazer_som(self):
        pass

# Classes derivadas
class Cachorro(Animal):
    def fazer_som(self):
        return f"{self.nome} faz o som 'Au Au'"

class Gato(Animal):
    def fazer_som(self):
        return f"{self.nome} faz o som 'Miau'"

# Criando instâncias de objetos
animal1 = Cachorro("Rex", 3)
animal2 = Gato("Whiskers", 2)
animal3 = Cachorro("Buddy", 5)

# Exemplo de utilização
print(animal1.fazer_som())
print(animal2.fazer_som())
print(animal3.fazer_som())
