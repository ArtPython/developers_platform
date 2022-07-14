import pytest
from mixer.backend.django import mixer


@pytest.fixture
def create_tasks(db) -> None:
    mixer.blend('projects.projects')
    mixer.blend('tasks.tasks')


def create_data(task, project, num):
    data = {
        "name": task[num].name,
        "status": task[num].status,
        "about": task[num].about,
        "expire": task[num].expire.date(),
        "project": project.id
    }
    return data


@pytest.fixture
def create_tasks_data(db) -> dict:
    project = mixer.blend('projects.projects')
    task = mixer.cycle(1).blend('tasks.tasks')
    return create_data(task, project, 0)


@pytest.fixture
def update_tasks_data(db) -> tuple:
    project = mixer.blend('projects.projects')
    task = mixer.cycle(2).blend('tasks.tasks')
    data_before = {
        "name": task[0].name,
        "status": task[0].status,
        "about": task[0].about,
        "expire": task[0].expire.date(),
        "project": project.id
    }
    data_after = {
        "name": "asd",
        "status": task[1].status,
        "about": task[1].about,
        "expire": task[1].expire.date(),
        "project": project.id
    }
    return data_before, data_after


task_url = "http://127.0.0.1:8000/tasks/"
