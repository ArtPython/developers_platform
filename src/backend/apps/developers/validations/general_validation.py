def validate_tasks(attrs, *args):
    """validate tasks data"""
    tasks_list = []
    try:
        if len(attrs['tasks']) > 0:
            for task in attrs['tasks']:
                if task.status == 'open':
                    if task.project in attrs['projects']:
                        if task.purpose == args[0]:
                            if args[1].objects.filter(tasks=int(task.id)).count() == 0:
                                tasks_list.append(task)
        attrs['tasks'] = tasks_list
    except KeyError:
        attrs['tasks'] = []
    return attrs['tasks']
