create table bankCard (
    id serial primary key,
    name varchar(100) not null,
    email varchar(100) not null unique,
    password varchar(100) not null,
    created_at timestamp default current_timestamp
);

insert into users (name,email,password) values ('Nomi', 'nomi22mail.com', 'pass');

select name, email from users;
select * from users;

create table donations (
    id serial primary key,
    donor_id integer references users (id),
    receiver_id integer references users (id),
    amount integer not null,
    created_at timestamp default current_timestamp
    updated_at timestamp default current_timestamp
);

insert into donations (id,donor_id,receiver_id, amount) values ('customID1688', 1,1, 2000);
select * from donations;
select d.id, u.name as donorName, d.created_at from donations d left join users u on d.donor_id = u.id;

inner join , where email = "nomi22mail.com" from select * from donations amount
select * from donations inner join users on donations.donor_id = users.id WHERE users.email = 'nomi22@mail.com'