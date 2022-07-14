from dataclasses import dataclass


@dataclass
class WrongMaxLanguagesAmount(Exception):
    """
    custom exception if amount of languages is
    more than max languages amount number
    """
    message: str

    def __str__(self) -> str:
        return self.message
