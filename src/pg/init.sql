create user dev with password 'dev';
create database benchmark_app with owner='dev' encoding='UTF8';

-- 切换到 echopong 数据库;
\c benchmark_app;

-- 删除所有表;
-- drop table bm_test1;

-- 创建脚本;
-- 触发器函数：自动更新 ut (update time) 字段
create or replace function update_ut_col() returns trigger as $$
  begin
    if new.* is not distinct from old.* then
      return null;  -- 无变化时什么也不做包括创建新版本数据，如果 return old 实际依然会创建新版本数据
    end if;

    new.ut = current_timestamp;
    return new;
  end;
$$ language plpgsql;

-- 用户表
create table if not exists bm_test1 (
	id bigint generated always as identity primary key,
	ct timestamp not null default current_timestamp,
	ut timestamp not null default current_timestamp,
	name varchar(64)
);
create trigger update_ut before update on bm_test1 for each row execute function update_ut_col();

-- 清空数据;


-- 初始化数据;
insert into bm_test1 (name) values ('test1'), ('test2'), ('test3'), ('test4'), ('test5'),
  ('test6'), ('test7'), ('test8'), ('test9'), ('test10');

-- 查询数据
select * from bm_test1;