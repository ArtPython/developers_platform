from dataclasses import dataclass


@dataclass
class WrongMaxFrameworksAmount(Exception):
    """
    custom exception if amount of frameworks is
    more than max frameworks amount number
    """
    message: str

    def __str__(self) -> str:
        return self.message


@dataclass
class WrongMaxFrameworksAmountForLanguage(Exception):
    """
    custom exception if amount of frameworks for particular
    language is more than max frameworks amount number for language
    """

    message: str

    def __str__(self) -> str:
        return self.message
